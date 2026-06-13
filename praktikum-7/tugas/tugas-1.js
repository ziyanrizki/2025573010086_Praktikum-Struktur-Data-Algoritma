class Pasien {
    constructor(id, nama, prioritas) {
        this.id = id;
        this.nama = nama;
        this.prioritas = prioritas;
        this.waktuDaftar = new Date();
    }
}

// Class AntrianRS
class AntrianRS {
    constructor() {
        this.antrianDarurat = [];
        this.antrianBiasa = [];
    }

    daftarPasien(pasien) {
        if (pasien.prioritas === "darurat") {
            this.antrianDarurat.push(pasien);
        } else {
            this.antrianBiasa.push(pasien);
        }
    }

    layani() {
        let pasien;

        if (this.antrianDarurat.length > 0) {
            pasien = this.antrianDarurat.shift();
        } else if (this.antrianBiasa.length > 0) {
            pasien = this.antrianBiasa.shift();
        } else {
            console.log("Tidak ada pasien dalam antrian.");
            return;
        }

        console.log(
            `Melayani Pasien: ${pasien.nama} (${pasien.prioritas})`
        );
    }

    tampilkanAntrian() {
        console.log("\n=== ANTRIAN DARURAT ===");
        this.antrianDarurat.forEach((p) =>
            console.log(`${p.id} - ${p.nama}`)
        );

        console.log("\n=== ANTRIAN BIASA ===");
        this.antrianBiasa.forEach((p) =>
            console.log(`${p.id} - ${p.nama}`)
        );
    }
}

const rs = new AntrianRS();

const namaPasien = [
    "Andi", "Budi", "Citra", "Dina", "Eko",
    "Fajar", "Gita", "Hana", "Indra", "Joko"
];

for (let i = 0; i < 10; i++) {
    const prioritas =
        Math.random() > 0.5 ? "darurat" : "biasa";

    rs.daftarPasien(
        new Pasien(i + 1, namaPasien[i], prioritas)
    );
}

rs.tampilkanAntrian();

console.log("\n=== PROSES PELAYANAN ===");
while (
    rs.antrianDarurat.length > 0 ||
    rs.antrianBiasa.length > 0
) {
    rs.layani();
}