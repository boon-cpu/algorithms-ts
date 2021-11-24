import insertionSort from "./insertionSort";

describe("Insertion Sort", () => {
  test("With Words", () => {
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

    const sorted = insertionSort(wordlist);
    expect(sorted).toStrictEqual(sortedList);
  });

  test("With Numbers", () => {
    const numList = [2, 6, 7, 4, 5, 1, 8, 9, 0, 3];
    const sortedList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const sorted = insertionSort(numList);
    expect(sorted).toStrictEqual(sortedList);
  });
});
