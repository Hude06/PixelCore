# PixelCore
### Engine Class
- Engine is the main Class, You can call many function from the Engine
### Loging
- To log something you just use the engine class and then call Log 
- `Engine.log("Any Text")`

### Partical Engine
- To set up a new Partical Engine you first new to init a new partical class
- `let particals = new Engine.ParticleSource();`
- Then in your main Game loop you have to run the update function witch moves the particals, And then you have to draw them. Like This
```javascript
function loop() {
    particals.update_particles(ctx);
    particals.draw_particles(ctx,"`COLOR 3,255,247");
    requestAnimationFrame(loop);
}
loop();
```
- Then whenever you want to have particas just start the particals in that location like this.
- `particals.start_particles(x,y)`
### Keyboard
- The keyboard is another really simple class in PixelCore, All you havew to do is check if the keyboard is pressed and then pass it a key. 
```javascript
    if (Engine.keyboard.get("w") === true) {
        //Your Code here
    }
```
### Mouse
- The Mouse is another verry simple class, First you init a new mouse, Like This
```let mouse = new Engine.Mouse();```
Then you can get the keyboard possition and if you want to see if it clicked on a object there is a clicked on fuction that is verry usefull
