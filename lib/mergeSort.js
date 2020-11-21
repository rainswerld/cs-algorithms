'use strict'

const mergeSort = arr => {
  if (arr.length <= 1) {
    // Base case: just return it!
    return arr
  }

  // Find the middle index
  const middleIndex = Math.floor(arr.length / 2)

  // Using the middle index, split the array into left and right sides
  const left = arr.slice(0, middleIndex)
  const right = arr.slice(middleIndex, arr.length)

  // Sort both left and right using mergeSort
  const leftSorted = mergeSort(left)
  const rightSorted = mergeSort(right)

  // Merge two sorted arrays together
  return merge(leftSorted, rightSorted)
}

// HELPER FUNCTION: merge two sorted arrays
const merge = (sortedArr1, sortedArr2) => {
  // create a result array, to store our merged array
  const result = []

  // while neither array is empty
  while (sortedArr1.length && sortedArr2.length) {
    // if the first element in `sortedArr1` is less than the first
    // element in `sortedArr2`
    if (sortedArr1[0] <= sortedArr2[0]) {
      // then remove it and push it into our `result` array
      result.push(sortedArr1.shift())
    } else {
      // otherwise remove the first element in `sortedArr2` and push it
      // into our `result` array
      result.push(sortedArr2.shift())
    }
  }

  // now, either `sortedArr1` or `sortedArr2` is empty, while the other could
  // still have elements. Append the remaining elements to our result array
  // then return our merged array.
  return result.concat(sortedArr1, sortedArr2)
}

const merge = (leftArr, rightArr) => {
  // create a result array, to store our merged array
  const result = []

  // keep track of the current index of each array
  let leftIndex = 0
  let rightIndex = 0

  // while we haven't reached the end of either array
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    // if the value at the current index of the left array is less than the
    // value at the current index of the right array
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      // push the current value of the left array
      result.push(leftArr[leftIndex])

      // and increase the leftIndex
      leftIndex++
    }
    // if the value at the current index of the left array is less than the
    // value at the current index of the right array
    else {
      // push the current value of the right array
      result.push(rightArr[rightIndex])

      // and increase the rightIndex
      rightIndex++
    }
  }
  // concatenate remaining portions of arrays (only one will have elements
  // remaining) to result
  return result.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex))
}

module.exports = {
  mergeSort
}
