import assert from "assert";
import { myqsort } from "../build/as-qsort.js";

const str: number[] = new Array(5, 3, 1, 2, 4, 0);
const cor: number[] = new Array(0, 1, 2, 3, 4, 5);
myqsort(str, 0, 5);
for(let i = 0; i < str.length; i++){
    assert.strictEqual(cor[i], str[i]);
}
console.log("ok");