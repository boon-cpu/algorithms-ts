import { longArray, shortArray } from "../testArrays";
import linearSearch from "./linearSearch";

describe("Linear Search Speed", () => {
  test("Long Array", () => {
    for (let i = 0; i < longArray.length; i++) {
      const rand = ~~(Math.random() * longArray.length);
      const search = linearSearch(longArray, rand);
      expect(search).toBe(rand);
    }
  });

  test("Short Array", () => {
    const rand = ~~(Math.random() * shortArray.length);
    const search = linearSearch(shortArray, rand);
    expect(search).toBe(rand);
  });
});
