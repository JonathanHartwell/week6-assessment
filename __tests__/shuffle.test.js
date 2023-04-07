const shuffle = require("../src/shuffle");

let testData = (5, [1, 2, 3, 4, 5])

describe("shuffle should...", () => {
  test('check to see if shuffle returns an array with equal length as input', () => {
    let arr = shuffle(testData)
    expect(arr.length).toBe(testData.length)
  })

  test('check to see if shuffled array contains the same items', () => {
    let arr = shuffle(testData)
    expect(arr.sort()).toEqual(testData.sort())
  })
});
