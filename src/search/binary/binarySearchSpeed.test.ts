import { longArray, shortArray } from "../testArrays";
import binarySearch from "./binarySearch";

describe("Binary Search Speed", () => {
  test("With Long Array", () => {
    for (let i = 0; i < longArray.length; i++) {
      const rand = ~~(Math.random() * longArray.length);
      const search = binarySearch(longArray, rand);
      expect(search).toBe(rand);
    }
  });

  test("With Short Array", () => {
    const rand = ~~(Math.random() * shortArray.length);
    const search = binarySearch(shortArray, rand);
    expect(search).toBe(rand);
  });
});
