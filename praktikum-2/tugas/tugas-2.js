const beratBadan = 68;
const tinggiBadan = 1.72;
const bmi = beratBadan / (tinggiBadan * tinggiBadan);

let kategori = "";

if (bmi < 18.5) {
    kategori = "Kurus (Underweight)";
} else if (bmi >= 18.5 && bmi < 25) {
    kategori = "Normal (Ideal)";
} else if (bmi >= 25 && bmi < 30) {
    kategori = "Gemuk (Overweight)";
} else {
    kategori = "Obesitas (Obese)";
}

console.log(`Berat: ${beratBadan} kg | Tinggi: ${tinggiBadan} m | BMI: ${bmi.toFixed(2)} | Kategori: ${kategori}`);