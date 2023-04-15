function solution(n) {
  let result = 0;
  // for (let l = 3; l <= n + 2; l++) {
  //   for (let r = 3; r <= n + 2; r++) {
  //     for (let c = 2; c <= n + 1; c++) {
  //       if (n == (r - 2) * (c - 1) * (l - 2)) {
  //         const diff = r * c * l - n;
  //         if (diff > result) {
  //           result = diff;
  //         }
  //       }
  //     }
  //   }
  // }
  const ord = 3 * 3 * (n + 1);
  return ord - n;
}

console.log(solution(4));
