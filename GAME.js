import * as Engine from "./Engine.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let particals = new Engine.ParticleSource();
let mouse = new Engine.Mouse();
let OverworldMap = {
    DemoRoom: {
        LowerSrc: "./DemoLower.png",
        UpperSrc: "./DemoUpper.png",
        gameObjects: {
            hero: new Engine.GameObject(200,1),
            npc1: new Engine.GameObject(50,1),
            npc5: new Engine.GameObject(1,6)
        }
    },
    Kitchen: {
        LowerSrc: "./DemoLower.png",
        UpperSrc: "./DemoUpper.png",
        gameObjects: {
            hero: new Engine.GameObject(6,1),
            npc1: new Engine.GameObject(4,1),
            npc5: new Engine.GameObject(3,6)
        }
    }
}
particals.start_particles(10,10);
function loop() {
    Engine.ClearCanvas(ctx,canvas);
    mouse.check();
    Engine.drawMap(OverworldMap.DemoRoom,1,ctx)
    if (mouse.clickOn(OverworldMap.DemoRoom.gameObjects.hero)) {
        Engine.log("Inter")
        OverworldMap.DemoRoom.gameObjects.hero.bounds.x = mouse.bounds.x - 15
        OverworldMap.DemoRoom.gameObjects.hero.bounds.y = mouse.bounds.y - 10

    }
    if (Engine.keyboard.get("w") === true) {
        OverworldMap.DemoRoom.gameObjects.hero.bounds.y -= 2
    }
    if (Engine.keyboard.get("s") === true) {
        OverworldMap.DemoRoom.gameObjects.hero.bounds.y += 2
    }
    if (Engine.keyboard.get("a") === true) {
        OverworldMap.DemoRoom.gameObjects.hero.bounds.x -= 2
    }
    if (Engine.keyboard.get("d") === true) {
        OverworldMap.DemoRoom.gameObjects.hero.bounds.x += 2
    }
    particals.update_particles(ctx);
    particals.draw_particles(ctx,"3,255,247");
    // Engine.keyboard.clear();
    requestAnimationFrame(loop);
}
loop();