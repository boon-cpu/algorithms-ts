import bubbleSort from "./bubbleSort";

describe("Bubble Sort", () => {
  test("Word Sorting", () => {
    const wordlist = [
      "bravo",
      "charlie",
      "alpha",
      "echo",
      "foxtrot",
      "golf",
      "hotel",
      "delta",
    ];
    const sortedList = [
      "alpha",
      "bravo",
      "charlie",
      "delta",
      "echo",
      "foxtrot",
      "golf",
      "hotel",
    ];

    const sorted = bubbleSort(wordlist);
    expect(sorted).toStrictEqual(sortedList);
    // toBe can only be used on strings,
    // for arrays and objects, toStrictEqual must be used.
  });
});
