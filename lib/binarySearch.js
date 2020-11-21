'use strict'

const binarySearch = (arr, element) => {
  // 1. Set the initial start & stop index values
  let startIndex = 0
  let stopIndex = arr.length - 1
  let midPoint

  // 6. Repeat steps 2-5 while the range has elements
  while (startIndex <= stopIndex) {
    // 2. Calculate the mid-point between the start and stop index value
    midPoint = Math.floor((startIndex + stopIndex) / 2)

    // 3. If the mid-point is the target element,
    if (arr[midPoint] === element) {
      // return the midpoint and you're done.
      return midPoint
    }

    // 4. Otherwise, if the midpoint is less than the target element,
    if (arr[midPoint] < element) {
      // then the target element is in the upper half-range.
      startIndex = midPoint + 1
    } else {
      // 5. Otherwise, the target element is in the lower half-range.
      stopIndex = midPoint - 1
    }
  }

  // 7. If the element wasn't found in the range, return -1
  return -1
}

module.exports = {
  binarySearch
}
