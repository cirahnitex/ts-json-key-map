declare class JsonKeyMap<K, V> {
    private map;
    constructor(initialValues?: Iterable<[K, V]>);
    set(key: K, value: V): this;
    get(key: K): V | undefined;
    clear(): void;
    delete(key: K): boolean;
    has(key: K): boolean;
    readonly size: number;
    forEach(callbackfn: (value: V, key: K, map: JsonKeyMap<K, V>) => void, thisArg?: any): void;
    keys(): K[];
    values(): V[];
    [Symbol.iterator](): IterableIterator<any[]>;
}
export default JsonKeyMap;
