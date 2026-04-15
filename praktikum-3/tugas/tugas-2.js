function pangkat(basis, eksponen) {
    if (eksponen === 0) {
        return 1; // Base case
    }
    return basis * pangkat(basis, eksponen - 1); // Recursive case
}

function balikString(str) {
    if (str.length <= 1) {
        return str; // Base case
    }
    return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

function cekPalindrom(str) {
    let kataTerbalik = balikString(str);
    return str.toLowerCase() === kataTerbalik.toLowerCase();
}

console.log("--- HASIL TUGAS REKURSIF ---");

console.log(`Pangkat: 5^3 = ${pangkat(5, 3)}`); 
console.log(`Pangkat: 2^5 = ${pangkat(2, 5)}`);

console.log(`Balik String: 'halo' -> ${balikString('halo')}`);

console.log("\n--- Cek Palindrom ---");
let kataUji = ['katak', 'civic', 'level', 'nasi'];
kataUji.forEach(kata => {
    console.log(`Apakah '${kata}' palindrom? ${cekPalindrom(kata)}`);
});