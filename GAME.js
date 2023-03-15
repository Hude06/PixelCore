import * as Engine from "./Engine.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let particals = new Engine.ParticleSource();
let mouse = new Engine.Mouse();
let button1 = new Engine.Button(canvas.width/2-100,10,200,30)
button1.text = "Start"
let scene = "menu"
let Level1 = new Engine.Scene();
let Menu = new Engine.Scene();
Level1.gameObjects = {
    hero: new Engine.GameObject(200,1,"./PixelArtPencil.png",64,64),
    npc1: new Engine.GameObject(50,1,"./PixelArtPencil.png",64,64),
    npc5: new Engine.GameObject(1,6,"./PixelArtPencil.png",64,64)
}
Menu.gameObjects = {
    // hero: new Engine.GameObject(200,1,"./PixelArtPencil.png",64,64),
    // npc1: new Engine.GameObject(100,1,"./PixelArtPencil.png",64,64),
    // npc5: new Engine.GameObject(1,6,"./PixelArtPencil.png",64,64)
}
particals.start_particles(10,10);
function keybaordLoop() {
    if (Engine.keyboard.get("w") === true) {
        Level1.gameObjects.hero.bounds.y -= 2
    }
    if (Engine.keyboard.get("s") === true) {
        Level1.gameObjects.hero.bounds.y += 2
    }
    if (Engine.keyboard.get("a") === true) {
        Level1.gameObjects.hero.bounds.x -= 2
    }
    if (Engine.keyboard.get("d") === true) {
        Level1.gameObjects.hero.bounds.x += 2
    }
}
function loop() {
    Engine.ClearCanvas(ctx,canvas);
    mouse.check();
    Menu.draw(ctx)
    if (mouse.clickOn(button1)) {
        button1.bounds.x = mouse.bounds.x
        button1.bounds.y = mouse.bounds.y

    }   
    if (mouse.clickOn(Level1.gameObjects.npc1)) {
        Level1.gameObjects.npc1.bounds.x = mouse.bounds.x - 25
        Level1.gameObjects.npc1.bounds.y = mouse.bounds.y- 10
    }
    button1.draw(ctx);
    keybaordLoop();
    particals.update_particles(ctx);
    particals.draw_particles(ctx,"3,255,247");
    requestAnimationFrame(loop);
}
loop();