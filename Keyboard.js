let currentKey = new Map();
export class Keyboard {
    constructor() {
    }
    setup_keyboard() {
        window.addEventListener("keydown", function (event) {
            currentKey.set(event.key, true);
        });
        window.addEventListener("keyup", function (event) {
            currentKey.set(event.key, false);
        });
    }
    get(key) {
        if (currentKey.get(key) === true) {
            return true;
        }
    }
}
