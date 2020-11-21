'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const { mergeSort } = require('../lib/mergeSort')

describe('Merge Sort', () => {
  it('should sort the array', () => {
    const myArray = [12, 6, 3, 7, 13, 8]
    const sorted = mergeSort(myArray)
    expect(sorted).to.deep.equal([3, 6, 7, 8, 12, 13])
    const otherArray = [-3, -1, 5, 100]
    const otherSorted = mergeSort(otherArray)
    expect(otherSorted).to.deep.equal([-3, -1, 5, 100])
  })
})
