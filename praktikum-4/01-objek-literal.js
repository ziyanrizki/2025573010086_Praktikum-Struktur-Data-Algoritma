const mahasiswa = {
    nama: 'Budi Santoso',
    umur: 20,
    jurusan: 'Teknik Informatika',
    ipk: 3.75,
    aktif: true,
};

console.log('=== Akses Property ===');
console.log('Nama :', mahasiswa.nama);
console.log('Jurusan :', mahasiswa['jurusan']);

const keyYangDicari = 'ipk';
console.log('IPK :', mahasiswa[keyYangDicari]);

mahasiswa.email = 'budi@email.com';
mahasiswa.umur = 21;
console.log('\nSetelah diubah:', mahasiswa);

delete mahasiswa.aktif;
console.log('Setelah delete:', mahasiswa);

const dosen = {
    nama: 'Dr. Ahmad Fauzi',
    mataKuliah: 'Struktur Data',
    pengalaman: 10, 
    perkenalan() {
        return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
    },
    statusSenior() {
        if (this.pengalaman >= 10) {
            return `${this.nama} adalah dosen senior.`;
        }
        return `${this.nama} adalah dosen junior.`;
    }
};
console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());

console.log('\n=== Iterasi Object ===');
for (const key in dosen) {
    if (typeof dosen[key] !== 'function') { // skip method
        console.log(` ${key}: ${dosen[key]}`);
    }
}

console.log('Keys :', Object.keys(mahasiswa));
console.log('Values:', Object.values(mahasiswa));

console.log('\n\n=== Latihan 1. ===');
const buku = {
  judul: "Laskar Pelangi",
  pengarang: "Andrea Hirata",
  tahunTerbit: 2005,
  harga: 100000,
  tersedia: true,

  info: function() {
    return `Buku "${this.judul}" karya ${this.pengarang} terbit tahun ${this.tahunTerbit}. Harga: Rp${this.harga}.`;
  },

  diskon: function(persen) {
    return this.harga * (1 - persen / 100);
  }
};

const koleksiBuku = [
  {
    judul: "Bumi",
    pengarang: "Tere Liye",
    tahunTerbit: 2014,
    harga: 95000,
    tersedia: true,
    info: function() { return `${this.judul} - ${this.pengarang}`; }
  },
  {
    judul: "Filosofi Teras",
    pengarang: "Henry Manampiring",
    tahunTerbit: 2018,
    harga: 110000,
    tersedia: false,
    info: function() { return `${this.judul} - ${this.pengarang}`; }
  },
  {
    judul: "Atomic Habits",
    pengarang: "James Clear",
    tahunTerbit: 2018,
    harga: 125000,
    tersedia: true,
    info: function() { return `${this.judul} - ${this.pengarang}`; }
  }
];

console.log("--- Daftar Semua Buku ---");
koleksiBuku.forEach((item) => {
  console.log(item.info());
});

console.log("\n--- Buku yang Tersedia ---");
const bukuTersedia = koleksiBuku.filter((item) => item.tersedia === true);
console.log(bukuTersedia);