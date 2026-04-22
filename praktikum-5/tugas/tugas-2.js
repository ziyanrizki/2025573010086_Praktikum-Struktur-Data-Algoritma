function fn_O1(n) {
  return n + 1;
}

function fn_On(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}

function fn_OnLogn(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) {
      total += i + j;
    }
  }
  return total;
}

function fn_On2(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += i + j;
    }
  }
  return total;
}

function benchmarkSemua(ukuranData) {
  console.log("N\t | O(1)\t | O(n)\t | O(n log n)\t | O(n^2)");
  console.log("---------------------------------------------------------");

  ukuranData.forEach(n => {
    const t0 = performance.now();
    fn_O1(n);
    const d0 = (performance.now() - t0).toFixed(4);

    const t1 = performance.now();
    fn_On(n);
    const d1 = (performance.now() - t1).toFixed(4);

    const t2 = performance.now();
    fn_OnLogn(n);
    const d2 = (performance.now() - t2).toFixed(4);

    const t3 = performance.now();
    fn_On2(n);
    const d3 = (performance.now() - t3).toFixed(4);

    console.log(`${n}\t | ${d0}\t | ${d1}\t | ${d2}\t\t | ${d3} ms`);
  });
}

benchmarkSemua([100, 500, 1000, 5000, 10000]);