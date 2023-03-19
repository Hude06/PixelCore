let currentKey = new Map();
let NavKey = new Map();
export class Keyboard {
    constructor() {
    }
    setup_keyboard() {
        window.addEventListener("keydown", function (event) {
            currentKey.set(event.key, true);
            NavKey.set(event.key, true);
        });
        window.addEventListener("keyup", function (event) {
            currentKey.set(event.key, false);
            NavKey.set(event.key, false);

        });
    }
    get(key) {
        if (currentKey.get(key) === true) {
            return true;
        }
    }
    getNav(key) {
        if (NavKey.get(key) === true) {
            return true;
        }
    }
    clear() {
        NavKey.clear();
    }
}
