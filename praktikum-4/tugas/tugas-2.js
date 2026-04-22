class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function cekKurungSeimbang(ekspresi) {
  const stack = new Stack();

  for (let i = 0; i < ekspresi.length; i++) {
    let karakter = ekspresi[i];

    if (karakter === '(') {
      stack.push(karakter);
    } else if (karakter === ')') {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.isEmpty();
}

const daftarUji = [
  '(2 + 3) * (4 - 1)',
  '((a + b)',
  ')(',
  '((()))',
  'if (a > b) { return (a); }'
];

daftarUji.forEach(uji => {
  const hasil = cekKurungSeimbang(uji);
  console.log(`'${uji}' -> Seimbang: ${hasil}`);
});