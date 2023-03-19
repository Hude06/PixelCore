import * as Utils from "./RectUtils.js";
import * as Key from "./Keyboard.js";
export { RigidBody } from "./Physics.js";
export let keyboard = new Key.Keyboard();
export function log(a) {
    console.log(a)
}
export class SoundSystem {
    constructor(src) {
        this.beat = new Audio(src)
    }
    play() {
        this.beat.play();
    }
}
export function ClearCanvas(ctx,canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
export class Scene {
    constructor(w,h) {
        this.w = w
        this.h = h
        this.gameObjects = {}
    }
    draw(ctx) {
        for (let name in this.gameObjects) {
            let obj = this.gameObjects[name];
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(obj.image,obj.bounds.x, obj.bounds.y, obj.bounds.w, obj.bounds.h);
        }
    }
    clear(ctx,canvas) {
        ctx.clearRect(0,0,canvas.width,canvas.height)
    }
}
export class Button {
    constructor(x,y,w,h) {
        this.sprite = false;
        this.bounds = new Utils.Rect(x,y,w,h)
        this.text = "Undefinded";
    }
    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(this.bounds.x,this.bounds.y,this.bounds.w,this.bounds.h)
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(this.text, this.bounds.x+this.bounds.w/2, this.bounds.y+25);
    }
}
export class GameObject {
    constructor(x,y,src,w,h,s) {
        this.sprite = true;
        this.bounds = new Utils.Rect(x,y,w,h)
        this.image = new Image();
        this.image.src = src;
        this.rigidBody = null;
        this.speed = s
    }
    init() {
        if (this.rigidBody) {
          this.rigidBody.loop(this.bounds)  
        }
    }
    folow(player) {
        if (player.bounds.x >= this.bounds.x) {
            this.bounds.x += this.speed;
        }
        if (player.bounds.x <= this.bounds.x) {
            this.bounds.x -= this.speed;
        }
        if (player.bounds.y >= this.bounds.y) {
            this.bounds.y += this.speed;
        }
        if (player.bounds.y <= this.bounds.y) {
            this.bounds.y -= this.speed;
        }
    }

}
export class Mouse {
    constructor() {
        this.bounds = new Utils.Rect(10,10,10,10)
        this.mouseClicked = false;
    }
    init() {
        addEventListener("mousemove", (event) => {
            this.bounds.x = (event.offsetX-6);
            this.bounds.y = (event.offsetY-6);
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
    click() {
        if (this.mouseClicked === true) {
            return true;
        }
    }
    posY() {
        return this.bounds.y
    }
    posX() {
        return this.bounds.x
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
export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function loop() {
    requestAnimationFrame(loop)
}
function init() {
    keyboard.setup_keyboard();
    loop();
}
init();
