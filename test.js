var kthSmallest = function (matrix, k) {
  let n = matrix.length
  let matrix_min = matrix[0][0]
  let matrix_max = matrix[n - 1][n - 1]

  while (matrix_min < matrix_max) {
    let mid = Math.floor((matrix_min + matrix_max) / 2)
    if (count(mid, matrix) < k) {
      matrix_min = mid + 1
    } else {
      matrix_max = mid
    }
  }

  return matrix_max
}

const count = (i, matrix) => {
  let col = matrix.length - 1
  let row = 0
  let cnt = 0
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] <= i) {
      console.log('helllo', row)
      cnt += col + 1
      row += 1
    } else {
      col -= 1
    }
  }
  console.log(cnt)
  return cnt
}

console.log(
  kthSmallest([
    [-5, -4],
    [-5, -4],
  ])
)

// console.log(Math.floor((-5 - 4) / 2))
