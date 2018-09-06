declare class TupleMap<K, V> {
    private map;
    set(key: K, value: V): this;
    get(key: K): V | undefined;
    clear(): void;
    delete(key: K): boolean;
    has(key: K): boolean;
    readonly size: number;
    forEach(callbackfn: (value: V, key: K, map: TupleMap<K, V>) => void, thisArg?: any): void;
    keys(): K[];
    values(): V[];
}
export default TupleMap;
