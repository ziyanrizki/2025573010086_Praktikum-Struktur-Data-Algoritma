// 1. Subarray Jumlah K
// Kompleksitas Waktu: O(n) | Solusi Naif: O(n²)
function subArrayJumlahK(arr, k) {
  const map = new Map();
  map.set(0, 1);
  let totalSubarray = 0;
  let prefixSum = 0;

  for (const num of arr) {
    prefixSum += num;
    if (map.has(prefixSum - k)) {
      totalSubarray += map.get(prefixSum - k);
    }
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
  return totalSubarray;
}

// 2. Karakter Pertama Unik
// Kompleksitas Waktu: O(n) | Solusi Naif: O(n²)
function karakterPertamaUnik(s) {
  const map = new Map();
  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }
  return -1;
}

// 3. Top K Frequent Elements
// Kompleksitas Waktu: O(n log n) karena ada sorting | Solusi Naif: O(n²) atau O(n³)
function topKFrequent(arr, k) {
  const map = new Map();
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map(([num]) => num);
}

console.log('=== Demo Tugas 2 ===');
console.log('subArrayJumlahK([1,1,1], 2) ->', subArrayJumlahK([1, 1, 1], 2));
console.log('karakterPertamaUnik("leetcode") ->', karakterPertamaUnik('leetcode'));
console.log('topKFrequent([1,1,1,2,2,3], 2) ->', topKFrequent([1, 1, 1, 2, 2, 3], 2));