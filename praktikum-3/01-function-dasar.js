function sapa() {
    console.log("Halo, selamat datang di praktikum 3!");
}
sapa();
sapa();

function sapaNama(nama) {
    console.log(`Halo, ${nama}! Selamat datang di praktikum 3!`);
}
sapaNama("Rizky");
sapaNama("Raki");

function kurang (angka1, angka2) {
    const hasil = angka1 - angka2;
    return hasil;
}

const hasilPenjumlahan = kurang(10, 25);
console.log('10 - 25 =', hasilPenjumlahan);
console.log('7 - 13 =', kurang(7, 13));

function hitung(nilai, pengali = 2){
    return nilai * pengali;
}
console.log(hitung(5));
console.log(hitung(5, 3));

const pesanGlobal = 'saya ada disini';
function cekscope() {
    const pesanLocal = 'saya ada disana';
    console.log(pesanGlobal);
    console.log(pesanLocal);
}
cekscope();


console.log('\n\n======= Latihan 1 ========');
function kurang (a, b) {
    return a - b;
}
function kali (a, b) {
    return a * b;
}
function bagi (a, b) {
    if (b === 0) {
        return 'Error: Pembagian dengan nol tidak diperbolehkan';
    }
}

console.log('10 - 5 =', kurang(10, 5));
console.log('10 * 5 =', kali(10, 5));
console.log('10 / 5 =', bagi(10, 5));

console.log('\n\n===Kalkulator Sederhana===');
function kalkulator (a, operator, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return kurang(a, b);
        case '*':
            return kali(a, b);
        case '/':
            return bagi(a, b);
        default:
            return 'Operator tidak valid'; 
    }
}
console.log('10 + 5 =', kalkulator(10, '+', 5));
console.log('10 - 5 =', kalkulator(10, '-', 5));
console.log('10 * 5 =', kalkulator(10, '*', 5));
console.log('10 / 5 =', kalkulator(10, '/', 5));
console.log('10 / 0 =', kalkulator(10, '/', 0));
console.log('10 % 5 =', kalkulator(10, '%', 5));