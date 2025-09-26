const matematika = 85;
const bahasaInggris = 90;
const ipa = 78;

console.log("Nilai Matematika: " + matematika);
console.log("Nilai Bahasa Inggris: " + bahasaInggris);
console.log("Nilai IPA: " + ipa);
console.log("----------------------------------------");

const nilaiRataRata = (matematika + bahasaInggris + ipa) / 3;

console.log("Nilai Rata-Rata: " + nilaiRataRata);

let statusKelulusan;

if (nilaiRataRata >= 80) {
  statusKelulusan = "Lulus";
} else {

  statusKelulusan = "Tidak Lulus";
}

console.log("Status Kelulusan: " + statusKelulusan);