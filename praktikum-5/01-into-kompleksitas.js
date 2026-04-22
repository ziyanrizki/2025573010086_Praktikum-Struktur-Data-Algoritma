function ukurWaktu(label, fn) {
    const mulai = Date.now();
    fn();
    const selesai = Date.now();
    console.log(`${label}: ${selesai - mulai} ms`);
}
const N = 100_00;
function jumlahkanLinear(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) total += i;
    return total;
}
function jumlahkanRumus(n) {
    return (n * (n + 1)) / 2;
}
function CariPasangan(arr){
    const pasangan = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 10)
                pasangan.push([arr[i], arr[j]]);
            
        }
    }
    return pasangan;
}
const data = Array.from({ length: 5000 }, (_, i) => i);

console.log ('=== perbandingan waktu esksekusi ===');
ukurWaktu ('O(1) jumlahkanRumus ', () => jumlahkanRumus(N));
ukurWaktu ('O(n) jumlahkanLinear ', () => jumlahkanLinear(N));
ukurWaktu ('O(n^2) CariPasangan ', () => CariPasangan(data));

console.log ('\nHasil sama?', jumlahkanLinear (100) === jumlahkanRumus(100));