import * as Engine from "./Engine.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let particals = new Engine.ParticleSource();
let OverworldMap = {
    DemoRoom: {
        src: "",
        gameObjects: {
            hero: new Engine.GameObject(50,50)
        }
    }
}
let x = OverworldMap.DemoRoom.gameObjects.hero.bounds.x;
let y = OverworldMap.DemoRoom.gameObjects.hero.bounds.x;
particals.start_particles(x,y)
function drawPlayer() {
    ctx.fillRect(x,y,32,32);
}
function loop() {
    Engine.ClearCanvas(ctx,canvas);
    drawPlayer();
    if (Engine.keyboard.get("w") === true) {
        Engine.log("TRUE")
    }
    particals.update_particles(ctx);
    particals.draw_particles(ctx,"3,255,247");
    requestAnimationFrame(loop);
}
loop();