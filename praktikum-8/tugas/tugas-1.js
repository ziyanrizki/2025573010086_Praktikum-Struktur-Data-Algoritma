class HashMapLinearProbing {
  constructor(kapasitas = 11) {
    this.kapasitas = kapasitas;
    this.tabel = new Array(kapasitas).fill(null);
    this.ukuran = 0;
    this.TOMBSTONE = Symbol('DELETED');
  }

  _hash(key) {
    let hash = 0;
    const PRIME = 31;
    const keyStr = String(key);
    for (let i = 0; i < Math.min(keyStr.length, 100); i++) {
      hash = (hash * PRIME + keyStr.charCodeAt(i)) % this.kapasitas;
    }
    return hash;
  }

  _resize() {
    const dataLama = this.tabel;
    this.kapasitas = this.kapasitas * 2;
    this.tabel = new Array(this.kapasitas).fill(null);
    this.ukuran = 0;

    for (const elemen of dataLama) {
      if (elemen !== null && elemen !== this.TOMBSTONE) {
        this.set(elemen.key, elemen.value);
      }
    }
  }

  set(key, value) {
    if (this.ukuran / this.kapasitas > 0.7) {
      this._resize();
    }

    const hashIdx = this._hash(key);
    let idx = hashIdx;
    let slotTombstone = -1;

    for (let i = 0; i < this.kapasitas; i++) {
      idx = (hashIdx + i) % this.kapasitas;
      const elemen = this.tabel[idx];

      if (elemen === null) {
        const targetIdx = slotTombstone !== -1 ? slotTombstone : idx;
        this.tabel[targetIdx] = { key, value };
        this.ukuran++;
        return true;
      }

      if (elemen === this.TOMBSTONE) {
        if (slotTombstone === -1) slotTombstone = idx;
        continue;
      }

      if (elemen.key === key) {
        elemen.value = value;
        return true;
      }
    }
    return false;
  }

  get(key) {
    const hashIdx = this._hash(key);
    let idx = hashIdx;

    for (let i = 0; i < this.kapasitas; i++) {
      idx = (hashIdx + i) % this.kapasitas;
      const elemen = this.tabel[idx];

      if (elemen === null) return undefined;
      if (elemen !== this.TOMBSTONE && elemen.key === key) {
        return elemen.value;
      }
    }
    return undefined;
  }

  delete(key) {
    const hashIdx = this._hash(key);
    let idx = hashIdx;

    for (let i = 0; i < this.kapasitas; i++) {
      idx = (hashIdx + i) % this.kapasitas;
      const elemen = this.tabel[idx];

      if (elemen === null) return false;
      if (elemen !== this.TOMBSTONE && elemen.key === key) {
        this.tabel[idx] = this.TOMBSTONE;
        this.ukuran--;
        return true;
      }
    }
    return false;
  }

  infoDistribusi() {
    let terisi = 0;
    let tombstoneCount = 0;
    for (const elemen of this.tabel) {
      if (elemen !== null && elemen !== this.TOMBSTONE) terisi++;
      if (elemen === this.TOMBSTONE) tombstoneCount++;
    }
    const lf = (this.ukuran / this.kapasitas).toFixed(2);
    console.log(`Kapasitas: ${this.kapasitas}, Elemen Aktif: ${terisi}, Tombstone: ${tombstoneCount}, Load Factor: ${lf}`);
  }
}

const mapProbing = new HashMapLinearProbing(5);
const languages = ['javascript', 'python', 'java', 'c++', 'rust', 'go', 'typescript'];
languages.forEach((lang, i) => mapProbing.set(lang, i + 1));

console.log('=== Demo Linear Probing ===');
console.log('get(java) :', mapProbing.get('java'));
mapProbing.delete('java');
console.log('Setelah hapus java, get(java) :', mapProbing.get('java'));
mapProbing.infoDistribusi();