import JsonKeyMap from "./index";

const map = new JsonKeyMap<[string, string], number>([
    [["aha", "blah"], 3],
    [["aha2", "blah2"], 5]
]);

for(const [key, val] of map) {
    console.log(key);
    console.log(val);
}