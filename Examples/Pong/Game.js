import * as Engine from "../../Engine.js";
import { Rect } from "../../RectUtils.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let particals = new Engine.ParticleSource();
let mouse = new Engine.Mouse();
let Level1 = new Engine.Scene();
Level1.gameObjects = {
    Player1: new Engine.GameObject(630,1,"../../Player.png",64,64,1),
}
class Bullet {
    constructor() {
        this.bounds = new Rect(Level1.gameObjects.Player1.bounds.x+27,Level1.gameObjects.Player1.bounds.y,10,10)
        this.angle = 0;
    }
    update() {
        this.bounds.y += 1
    }
    draw() {
        ctx.fillRect(this.bounds.x,this.bounds.y,this.bounds.w,this.bounds.h)
    }
}
let bullets = []
function keybaordLoop() {
    if (Engine.keyboard.get("w") === true) {
        Level1.gameObjects.Player1.bounds.y -= 1.5;
    }
    if (Engine.keyboard.get("d") === true) {
        Level1.gameObjects.Player1.bounds.x += 1.5;
    }
    if (Engine.keyboard.get("a") === true) {
        Level1.gameObjects.Player1.bounds.x -= 1.5;
    }
    if (Engine.keyboard.get("s") === true) {
        Level1.gameObjects.Player1.bounds.y += 1.5;
    }
    if (Engine.keyboard.getNav(" ")) {
        let bullet = new Bullet();
        bullets.push(bullet);
        setTimeout(() => {
            bullets.shift();
        }, 1000);

    }
}
function loop() {
    //DRAWING
    Level1.clear(ctx,canvas);
    particals.draw_particles(ctx,"252, 53, 93");
    Level1.draw(ctx);
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].draw();
    }
    //INIT
    mouse.init();
    Level1.gameObjects.Player1.init();
    //UPDATING
      
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].update();
    }
    particals.update_particles(ctx);
    keybaordLoop();
    Engine.keyboard.clear();
    requestAnimationFrame(loop);
}
loop();