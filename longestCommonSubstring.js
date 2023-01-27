let s1, s2

function longestCommonSubstring(n1, n2, count) {
  if (n1 == 0 || n2 == 0) {
    return count
  }
  if (s1[n1 - 1] == s2[n2 - 1]) {
    count = longestCommonSubstring(i - 1, j - 1, count + 1)
  }
  count = Math.max(
    count,
    Math.max(
      longestCommonSubstring(n1, n2 - 1, 0),
      longestCommonSubstring(n1 - 1, n2, 0),
    ),
  )

  return count
}
s1 = 'yashwant'
s2 = 'jashwant'
// let count = 0
console.log(longestCommonSubstring(s1.length, s2.length, 0))
