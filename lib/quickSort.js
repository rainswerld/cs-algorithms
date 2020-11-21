'use strict'

// A 3-way quicksort
const quickSort = arr => {
  if (arr.length <= 1) {
    // Base case: just return it!
    return arr
  }

  // Choose a pivot, for simplicity we choose the first element
  const pivot = arr[0]

  // Find all of the elements less than or equal to the pivot
  const lessThan = arr.filter(item => item <= pivot)
  // Find all of the elements greater than the pivot
  const greaterThan = arr.filter(item => item > pivot)
  // Find all of the elements equal to the pivot
  const equalTo = arr.filter(item => item === pivot)

  // Recursively sort elements lessThanEq and greaterThan the pivot
  const lessThanSorted = quickSort(lessThan)
  const greaterThanSorted = quickSort(greaterThan)

  // Combine
  // 1. every sorted element that is less than or equal to the pivot,
  // 2. with any elements equal to the pivot,
  // 3. and every sorted element that is greater than the pivot.
  return lessThanSorted.concat(equalTo, greaterThanSorted)
}

module.exports = {
  quickSort
}
