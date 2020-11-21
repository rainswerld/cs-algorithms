'use strict'

// Note, this bubbleSort method could be more efficient, but
// the current implementation was chosen for clarity. Review
// the following to see how bbubble sort can be optimized:
// https://en.wikipedia.org/wiki/Bubble_sort#Optimizing_bubble_sort
const bubbleSort = arr => {
  // pass through the array once for every element in the array
  for (let i = 0; i < arr.length; i++) {
    // for each pass through the array, move the next largest
    // element to its final position.

    // Loop until the second to last element, since we compare
    // each element with the element directly after it.
    for (let j = 0; j < arr.length - 1; j++) {
      // compare the current element with the next element
      // if the current element is less than the next element
      if (arr[j] > arr[j + 1]) {
        // swap the elements
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}

module.exports = {
  bubbleSort
}
