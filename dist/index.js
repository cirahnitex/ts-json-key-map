"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JsonKeyMap {
    constructor(initialValues = []) {
        this.map = new Map();
        for (const [key, value] of initialValues) {
            this.set(key, value);
        }
    }
    set(key, value) {
        this.map.set(JSON.stringify(key), value);
        return this;
    }
    get(key) {
        return this.map.get(JSON.stringify(key));
    }
    clear() {
        this.map.clear();
    }
    delete(key) {
        return this.map.delete(JSON.stringify(key));
    }
    has(key) {
        return this.map.has(JSON.stringify(key));
    }
    get size() {
        return this.map.size;
    }
    forEach(callbackfn, thisArg) {
        this.map.forEach((value, key) => {
            callbackfn.call(thisArg, value, JSON.parse(key), this);
        });
    }
    keys() {
        return Array.from(this.map.keys()).map(key => JSON.parse(key));
    }
    values() {
        return Array.from(this.map.values());
    }
    *[Symbol.iterator]() {
        for (const [keyStr, value] of this.map) {
            yield [JSON.parse(keyStr), value];
        }
    }
}
exports.default = JsonKeyMap;
