class Produk {
  constructor(id, nama, harga, stok) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }

  info() {
    console.log(`[ID: ${this.id}] ${this.nama} | Rp${this.harga} | Stok: ${this.stok}`);
  }

  tersedia() {
    return this.stok > 0;
  }

  jual(jumlah) {
    if (this.stok - jumlah >= 0) {
      this.stok -= jumlah;
    }
  }
}

class ProdukDigital extends Produk {
  constructor(id, nama, harga, stok, ukuranFile, formatFile) {
    super(id, nama, harga, stok);
    this.ukuranFile = ukuranFile;
    this.formatFile = formatFile;
  }

  info() {
    super.info();
    console.log(`File: ${this.ukuranFile}MB, Format: ${this.formatFile}`);
  }

  download() {
    console.log(`Downloading ${this.nama}...`);
  }

  jual() {
    console.log(`Lisensi ${this.nama} berhasil dikirim.`);
  }
}

class ProdukFisik extends Produk {
  constructor(id, nama, harga, stok, beratGram, dimensi) {
    super(id, nama, harga, stok);
    this.beratGram = beratGram;
    this.dimensi = dimensi;
  }

  info() {
    super.info();
    console.log(`Berat: ${this.beratGram}g, Dimensi: ${this.dimensi}`);
  }

  hitungOngkir(tarifPerKg) {
    return (this.beratGram / 1000) * tarifPerKg;
  }
}

const daftarProduk = [
  new ProdukDigital(1, "E-Book JS", 50000, 999, 10, "PDF"),
  new ProdukDigital(2, "Premium Course", 250000, 999, 1500, "MP4"),
  new ProdukFisik(3, "Laptop Sleeve", 120000, 15, 300, "35x25 cm"),
  new ProdukFisik(4, "Mousepad", 50000, 0, 200, "20x20 cm")
];

daftarProduk.forEach(p => p.info());

const tersedia = daftarProduk.filter(p => p.tersedia());
console.log(tersedia);

const namaProduk = daftarProduk.map(p => p.nama);
console.log(namaProduk);