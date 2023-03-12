import * as Utils from "./RectUtils.js";
import * as Key from "./Keyboard.js";
export let keyboard = new Key.Keyboard();
export function log(a) {
    console.log(a)
}
export function ClearCanvas(ctx,canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
export class GameObject {
    constructor(x,y) {
        this.bounds = new Utils.Rect(x,y,32,32)
    }
}
export function drawMap(room,scale,ctx) {
    for (let name in room.gameObjects) {
        let obj = room.gameObjects[name];
        ctx.fillRect(obj.bounds.x*scale, obj.bounds.y*scale, obj.bounds.w, obj.bounds.h);

    }
}
export class Mouse {
    constructor() {
        this.bounds = new Utils.Rect(10,10,10,10)
        this.mouseClicked = false;
    }
    check() {
        addEventListener("mousemove", (event) => {
            this.bounds.x = (event.offsetX);
            this.bounds.y = (event.offsetY);
        });
        document.addEventListener("mousedown", (e) => {
            if (e.button === 0) {
                this.mouseClicked = true
            }
          });
          document.addEventListener("mouseup", (e) => {
            this.mouseClicked = false;
          });

    }
    clickOn(item) {
        if (this.bounds.intersects(item.bounds) && this.mouseClicked === true) {
            return true;
        }
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
function loop() {   
    requestAnimationFrame(loop)
}
function init() {
    keyboard.setup_keyboard();
    loop();
}
init();
