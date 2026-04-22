function jumlahArray(arr) {
    let total = 0;
    for (const x of arr) total += x;
    return total;
}

function duplikasiArray(arr) {
    const baru = [];
    for (const x of arr) baru.push(x * 2);
    return baru;
}

function faktorialRekursif(n) {
    if (n <= 1) return 1;
    return n * faktorialRekursif(n - 1);
}

function faktorialIteratif(n) {
    let hasil = 1;
    for (let i = 2; i <= n; i++) hasil *= i;
    return hasil;
}

function hitungUnik(arr) {
    const seen = new Set();
    for (const x of arr) seen.add(x);
    return seen.size;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Jumlah array :', jumlahArray(arr));
console.log('Duplikasi array:', duplikasiArray(arr));
console.log('Faktorial 10 rekursif :', faktorialRekursif(10));
console.log('Faktorial 10 iteratif :', faktorialIteratif(10));

const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
console.log('Elemen unik:', hitungUnik(dataAcak));

console.log('\n\n====== Laatihan Class BankAccount ======');
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

function cariPasanganCepat(arr, target) {
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (seen.has(complement)) {
      return [complement, arr[i]];
    }
    seen.add(arr[i]);
  }
  return null;
}

const dataUji = [2, 7, 11, 15];
const targetUji = 9;

console.log("--- Uji Fungsi ---");
console.log("Lambat:", cariPasanganLambat(dataUji, targetUji));
console.log("Cepat :", cariPasanganCepat(dataUji, targetUji));

const n = 50000;
const dataBesar = Array.from({ length: n }, (_, i) => i);
const targetBesar = -1; 

console.log("\n--- Benchmark (n=50.000) ---");

let t1 = performance.now();
cariPasanganLambat(dataBesar, targetBesar);
let s1 = performance.now();
console.log(`Waktu Lambat O(n^2): ${(s1 - t1).toFixed(4)} ms`);

let t2 = performance.now();
cariPasanganCepat(dataBesar, targetBesar);
let s2 = performance.now();
console.log(`Waktu Cepat  O(n)  : ${(s2 - t2).toFixed(4)} ms`);
