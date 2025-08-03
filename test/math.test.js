import { sum } from "../src/modules/math.js";

test("test 2 + 3 = 5",()=>{
    expect(sum(2,3)).toBe(5);
});