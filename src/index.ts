class JsonKeyMap<K, V> {
    private map = new Map<string, V>();

    set(key: K, value: V): this {
        this.map.set(JSON.stringify(key), value);
        return this;
    }

    get(key: K): V | undefined {
        return this.map.get(JSON.stringify(key));
    }

    clear() {
        this.map.clear();
    }

    delete(key: K): boolean {
        return this.map.delete(JSON.stringify(key));
    }

    has(key: K): boolean {
        return this.map.has(JSON.stringify(key));
    }

    get size() {
        return this.map.size;
    }

    forEach(callbackfn: (value: V, key: K, map: JsonKeyMap<K, V>) => void, thisArg?: any): void {
        this.map.forEach((value, key) => {
            callbackfn.call(thisArg, value, JSON.parse(key), this);
        });
    }

    keys(): K[] {
        return Array.from(this.map.keys()).map(key=>JSON.parse(key))
    }

    values(): V[] {
        return Array.from(this.map.values());
    }

}

export default JsonKeyMap;