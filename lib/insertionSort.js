'use strict'

const insertionSort = array => {
  // Loop through each element
  for (let i = 0; i < array.length; i++) {
    // Store the current element in `elementToInsert`.
    // `elementToInsert` will be inserted into the sorted portion of the array.
    const elementToInsert = array[i]

    // Loop *backwards* through the sorted portion of the array using `j`.
    // Since elements before `i` are already sorted,
    // start `j` at the element before `i`, the largest sorted element.
    let j = i - 1

    // loop *backwards* while `j` is an index in the array
    // *and* the element at j is larger than the elementToInsert
    while (j >= 0 && array[j] > elementToInsert) {
      // Copy the current sorted element, array[j], into the next slot in the
      // array, arr[j + 1]. This frees up the array[j] to be overwritten with
      // `elementToInsert`
      array[j + 1] = array[j]

      // then decrease `j` to continue looping backwards
      j--
    }

    // Insert the elementToInsert in its sorted location, [j + 1]
    array[j + 1] = elementToInsert
  }

  return array
}

module.exports = {
  insertionSort
}
