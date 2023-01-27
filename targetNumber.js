function targetNumberSum(arr, targetNumber) {
  arr.sort(function (a, b) {
    return a - b
  })
  let start = 0,
    end = arr.length - 1
  let output = []
  while (start < length) {
    if (arr[start] + arr[end] === targetNumber) {
      output.push(arr[start])
      output.push(arr[end])
      break
    } else if (arr[start] + arr[end] > targetNumber) {
      end--
    } else {
      start++
    }
  }
  return output
}
let arr = [4, 3, 1, 8]
let targetNumber = 11

console.log(targetNumberSum(arr, targetNumber))
