import * as Engine from "../../Engine.js";
import {Level} from "/Level.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let hero = new Engine.Sprite(10,10,10,10);
let parts = new Engine.ParticleSource();
let LEVEL1 = new Level();
LEVEL1.Sprite = [hero]
parts.color = "blue"
parts.start_particles(100,100)
function loop() {
    Engine.ClearCanvas(ctx,canvas);
    parts.update_particles(ctx);
    parts.draw_particles(ctx,"3,255,247");
    for (let i = 0; i < LEVEL1.Sprite.length; i++) {
        LEVEL1.Sprite[i].draw(ctx);
    }
    requestAnimationFrame(loop);
}
function init() {
    loop();
}
init();

