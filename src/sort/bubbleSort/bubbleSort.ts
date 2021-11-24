import swap from "../swap";

function bubbleSort(array: number[] | string[]): number[] | string[] {
  array = array.slice(); // creates a copy of the array

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

export default bubbleSort;
