function intersectionLambat(arr1, arr2) {
    const hasil = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !hasil.includes(arr1[i])) {
            hasil.push(arr1[i]);
        }
    }
    return hasil;
}

function intersectionCepat(arr1, arr2) {
    const set2 = new Set(arr2);
    return [...new Set(arr1.filter(x => set2.has(x)))];
}

function groupAnagrams(strs) {
    const map = {};
    for (let s of strs) {
        let key = s.split('').sort().join('');
        if (!map[key]) map[key] = [];
        map[key].push(s);
    }
    return Object.values(map);
}

function cekKuadratLambat(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (i !== j && arr[i] + arr[j] === arr[k] ** 2) return true;
            }
        }
    }
    return false;
}

function cekKuadratCepat(arr) {
    const setKuadrat = new Set(arr.map(x => x ** 2));
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (setKuadrat.has(arr[i] + arr[j])) return true;
        }
    }
    return false;
}

const n = 2000;
const dataA1 = Array.from({ length: n }, (_, i) => i);
const dataA2 = Array.from({ length: n }, (_, i) => i + 500);
const dataC = Array.from({ length: 500 }, (_, i) => i + 1);

console.log("=== Fungsi A (Intersection) ===");
let t = performance.now();
intersectionLambat(dataA1, dataA2);
console.log(`Lambat: ${(performance.now() - t).toFixed(4)} ms`);

t = performance.now();
intersectionCepat(dataA1, dataA2);
console.log(`Cepat: ${(performance.now() - t).toFixed(4)} ms`);

console.log("\n=== Fungsi B (Anagrams) ===");
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

console.log("\n=== Fungsi C (a + b = c^2) ===");
t = performance.now();
cekKuadratLambat(dataC);
console.log(`Lambat: ${(performance.now() - t).toFixed(4)} ms`);

t = performance.now();
cekKuadratCepat(dataC);
console.log(`Cepat: ${(performance.now() - t).toFixed(4)} ms`);