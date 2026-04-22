function hitungKompleksitas(n, fn) {
  const mulai = Date.now();
  fn(n);
  const selesai = Date.now();
  console.log(`Waktu eksekusi: ${selesai - mulai} ms`);
}

function fnA(n) { 
  return n * 2; 
}

function fnB(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

function fnC(n) {
  for (let i = 1; i < n; i *= 2) {
    console.log(i);
  }
}

function fnD(n) {
  const arr = Array.from({ length: n }, (_, i) => i);
  arr.forEach(x => {
    arr.forEach(y => {
      arr.forEach(z => {
        console.log(x, y, z);
      });
    });
  });
}

const n = 1000;

hitungKompleksitas(n, fnA);
hitungKompleksitas(n, fnC);