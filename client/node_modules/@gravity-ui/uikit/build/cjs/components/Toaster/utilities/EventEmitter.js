"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
class EventEmitter {
    listeners;
    constructor() {
        this.listeners = [];
    }
    destroy() {
        this.listeners = [];
    }
    subscribe(listener) {
        if (typeof listener === 'function') {
            this.listeners.push(listener);
        }
        return () => {
            this.listeners = this.listeners.filter((currentListener) => listener !== currentListener);
        };
    }
    notify(data) {
        if (this.listeners.length === 0) {
            return false;
        }
        for (const listener of this.listeners) {
            listener(data);
        }
        return true;
    }
}
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map
