function maximalSquare(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  const dp = Array.from({ length: rows + 1 }, () =>
    Array.from({ length: cols + 1 }, () => 0),
  );
  let maxSquare = 0;
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (matrix[i - 1][j - 1] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        maxSquare = Math.max(maxSquare, dp[i][j]);
      }
    }
  }
  return maxSquare * maxSquare;
}
