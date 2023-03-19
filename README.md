# PixelCore
Pixel Core is a game engine designed for 2D games, especially pixel art games. It provides many features such as particle systems, scene management, input handling, and more.
### Keyboard Handeling
The Keyboard module provides a Keyboard class, which is used to handle keyboard input in the game. It has functions for setting up the keyboard and checking if a certain key is pressed.
```javascript
    if (Engine.keyboard.get("w") === true) {
        //Your Code here
    }
```

### Physics Module
The Physics module provides the RigidBody class, which is used to represent an object with physical properties in the game world. It has properties for the object's velocity, acceleration, and friction, as well as functions for updating the object's position and checking for collisions.
### Scenes
The Scene class is used to manage game objects in a scene. It has properties for the width and height of the scene, as well as a gameObjects property which is an object containing all of the game objects in the scene. It has functions for drawing and clearing the scene.
Button
### Buttons
The Button class is used to represent a button in the game. It has properties for the button's position, size, and text label. It has a draw function for rendering the button on the screen.
GameObject
### GameObjects
The GameObject class is used to represent a game object in the game world. It has properties for the object's position, size, sprite, and image source. It also has a rigidBody property for applying physics to the object, as well as a speed property for controlling the object's movement speed. It has functions for initializing the object and making it follow another object.
Mouse
### Mouse Input
The Mouse class is used to handle mouse input in the game. It has properties for the mouse's position and whether or not the mouse button is currently clicked. It has functions for initializing the mouse and checking if it has clicked on a certain game object.
```let mouse = new Engine.Mouse();```
Then you can get the keyboard possition and if you want to see if it clicked on a object there are many of verry useful functions as well

### Particle Engine
The ParticleSource class is used to manage particle effects in the game. It has properties for the particles and whether or not they are enabled. It has functions for starting, drawing, and updating the particle effects.

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

Overall, Pixel Core is a comprehensive 2D game engine that provides many useful features for game development. It is especially well-suited for creating pixel art games, but can be used for any type of 2D game.

