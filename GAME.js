import * as Engine from "./Engine.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let particals = new Engine.ParticleSource();
let mouse = new Engine.Mouse();
let button1 = new Engine.Button(10,10,25,10)
let Level1 = new Engine.Scene();
Level1.gameObjects = {
    hero: new Engine.GameObject(200,1,"./PixelArtPencil.png",64,64),
    npc1: new Engine.GameObject(50,1,"./PixelArtPencil.png",64,64),
    npc5: new Engine.GameObject(1,6,"./PixelArtPencil.png",64,64)
}
let Level2 = new Engine.Scene();
Level2.gameObjects = {
    hero: new Engine.GameObject(200,1,"./PixelArtPencil.png",64,64),
    npc1: new Engine.GameObject(100,1,"./PixelArtPencil.png",64,64),
    npc5: new Engine.GameObject(1,6,"./PixelArtPencil.png",64,64)
}
particals.start_particles(10,10);
function keybaordLoop() {
    if (Engine.keyboard.get("w") === true) {
        Level2.gameObjects.hero.bounds.y -= 2
    }
    if (Engine.keyboard.get("s") === true) {
        Level2.gameObjects.hero.bounds.y += 2
    }
    if (Engine.keyboard.get("a") === true) {
        Level2.gameObjects.hero.bounds.x -= 2
    }
    if (Engine.keyboard.get("d") === true) {
        Level2.gameObjects.hero.bounds.x += 2
    }
}
function loop() {
    Engine.ClearCanvas(ctx,canvas);
    mouse.check();
    Level2.draw(ctx);
    if (mouse.clickOn(Level2.gameObjects.npc1)) {
        Level2.gameObjects.npc1.bounds.x = mouse.bounds.x - 25
        Level2.gameObjects.npc1.bounds.y = mouse.bounds.y- 10
    }
    button1.draw(ctx);
    keybaordLoop();
    particals.update_particles(ctx);
    particals.draw_particles(ctx,"3,255,247");
    requestAnimationFrame(loop);
}
loop();