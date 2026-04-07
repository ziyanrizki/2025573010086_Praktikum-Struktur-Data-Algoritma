console.log('=== for loop: Hitung 1 sampai 5 ===');
for (let i = 1; i <= 5; i++) {
        console.log(`literasi ke-${i}`);}

console.log('\n=== While loop: countdown ===');
let hitung = 5
while (hitung > 0) {
    console.log(`Hitung mundur: ${hitung}`); hitung--}
    console.log('Selesai!');

    console.log('\n=== Bilanngan genap dari 1 sampai 20 ===');
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        process.stdout.write(i + ' ');
    }
}

console.log('');
console.log('\n=== Break dan Continue ===');
for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        console.log('Melewati angka ${i} (continue)'); continue;}

    if (i === 8) {
        console.log('Berhenti pada angka ${i} (break)'); break;
    }
} 

console.log('\n\n=== segitiga bintang dan deretta Fibonacci ===');
 
console.log('--- Segitiga Bintang ---');
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write('* ');
    }
    console.log('');
}

console.log('--- Deret Fibonacci ---');
for (let i = 2; i <= 50; i++) {
    let isPrima = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrima = false; 
            break; 
        }
    }

    if (isPrima) {
        process.stdout.write(i + ' ');
    }
}