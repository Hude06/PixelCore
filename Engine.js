import * as Utils from "./RectUtils.js";
export function log(a) {
    console.log(a)
}
export function ClearCanvas(ctx,canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
export class Sprite {
    constructor(x,y,w,h) {
        this.bounds = new Utils.Rect(x,y,w,h)
    }
    draw(ctx) {
        ctx.fillStyle = "black"
        ctx.fillRect(this.bounds.x, this.bounds.y, this.bounds.w, this.bounds.h)
    }
    debug(ctx) {
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.strokeRect(this.bounds.x,this.bounds.y,this.bounds.w,this.bounds.h)
    }
}
export class ParticleSource {
    constructor() {
        this.parts = [];
        this.particles_enabled = true;
    }
    start_particles(x, y) {
        if (!this.particles_enabled) return;
        this.parts = [];
        for (let i = 0; i < 50; i++) {
            this.parts.push({
                pos: {
                    x: x,
                    y: y,
                },
                vel: {
                    x: (Math.random() - 0.5) * 5,
                    y: (Math.random() - 0.5) * 5,
                },
                alive: true,
                age: 0,
            });
        }
    }
    draw_particles(ctx,color) {
        for (let i = 0; i < this.parts.length; i++) {
            let part = this.parts[i];
            if (part.alive) {
                let a = Math.floor(100 - part.age * 2);
                ctx.save();
                ctx.beginPath();
                ctx.fillStyle = `rgba(`+color+`,${a}%)`;
                ctx.fillRect(part.pos.x, part.pos.y, 10, 10);
                ctx.restore();
            }
        }
    }
    update_particles() {
        this.parts.forEach((part) => {
            part.pos.x += part.vel.x;
            part.pos.y += part.vel.y;
            part.age += 1;
            if (part.age > 50) {
                part.alive = false;
            }
        });
    }
}