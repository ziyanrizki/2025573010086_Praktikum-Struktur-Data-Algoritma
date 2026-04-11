const dataMahasiswa = [
    { nama: 'Andi', nilai: 85 },
    { nama: 'Budi', nilai: 70 },
    { nama: 'Caca', nilai: 92 },
    { nama: 'Deni', nilai: 55 },
    { nama: 'Euis', nilai: 40 },
    { nama: 'Fafa', nilai: 78 }
];

function hitungStatistik(arrMahasiswa) {
    const totalMahasiswa = arrMahasiswa.length;
    
    const statistik = arrMahasiswa.reduce((acc, curr) => {
        return {
            totalNilai: acc.totalNilai + curr.nilai,
            tertinggi: curr.nilai > acc.tertinggi ? curr.nilai : acc.tertinggi,
            terendah: curr.nilai < acc.terendah ? curr.nilai : acc.terendah
        };
    }, { totalNilai: 0, tertinggi: -Infinity, terendah: Infinity });

    return {
        total: totalMahasiswa,
        rataRata: (statistik.totalNilai / totalMahasiswa).toFixed(2),
        tertinggi: statistik.tertinggi,
        terendah: statistik.terendah
    };
}

const filterLulus = (arrMahasiswa, batasLulus) => {
    return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
};

function tambahGrade(arrMahasiswa) {
    return arrMahasiswa.map(mhs => {
        let grade;
        if (mhs.nilai >= 85) grade = 'A';
        else if (mhs.nilai >= 75) grade = 'B';
        else if (mhs.nilai >= 65) grade = 'C';
        else if (mhs.nilai >= 50) grade = 'D';
        else grade = 'E';
        
        return { ...mhs, grade: grade }; 
    });
}


const stats = hitungStatistik(dataMahasiswa);
const mahasiswaLulus = filterLulus(dataMahasiswa, 60);
const dataDenganGrade = tambahGrade(dataMahasiswa);

console.log("=== STATISTIK NILAI ===");
console.log(`Total Mahasiswa: ${stats.total}`);
console.log(`Rata-rata Nilai: ${stats.rataRata}`);
console.log(`Nilai Tertinggi: ${stats.tertinggi}`);
console.log(`Nilai Terendah : ${stats.terendah}`);

console.log("\n=== DAFTAR MAHASISWA & GRADE ===");
dataDenganGrade.forEach((mhs, index) => {
    console.log(`${index + 1}. ${mhs.nama} - Nilai: ${mhs.nilai} [Grade: ${mhs.grade}]`);
});

console.log("\n=== MAHASISWA YANG LULUS (>= 60) ===");
mahasiswaLulus.forEach(mhs => console.log(`- ${mhs.nama} (${mhs.nilai})`));