import * as Engine from "../../Engine.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let particals = new Engine.ParticleSource();
let mouse = new Engine.Mouse();
let Level1 = new Engine.Scene();
Level1.gameObjects = {
    Paddle1: new Engine.GameObject(0,1,"../../PixelArtPencil.png",64,64),
    Paddle2: new Engine.GameObject(500,1,"../../PixelArtPencil.png",64,64),
}
Level1.gameObjects.Paddle1.rigidBody = new Engine.RigidBody();
particals.start_particles(10,10);
function keybaordLoop() {
    if (Engine.NavKey.get("w") === true) {
        Level1.gameObjects.Paddle1.rigidBody.YVelocity += 5;
    }
    if (Engine.NavKey.get("d") === true) {
        Level1.gameObjects.Paddle1.rigidBody.XVelocity -= 1;
    }
}
function loop() {
    Engine.ClearCanvas(ctx,canvas);
    mouse.check();
    // if (mouse.clickOn(Level1.gameObjects.Paddle2)) {
    //     Level1.gameObjects.Paddle2.bounds.x = mouse.bounds.x
    //     Level1.gameObjects.Paddle2.bounds.y = mouse.bounds.y
    // }   
    // button1.draw(ctx);
    Level1.gameObjects.Paddle1.init();
    Level1.draw(ctx);
    keybaordLoop();
    particals.update_particles(ctx);
    particals.draw_particles(ctx,"3,255,247");
    Engine.NavKey.clear();
    requestAnimationFrame(loop);
}
loop();