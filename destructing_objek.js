const profile = {
  firstName: "resky",
  lastName: "bayu",
  age: 27,
};

const { firstName, lastName, age } = profile;

console.log(firstName, lastName, age);
console.log(firstName);

// =========================
// DESTRUCTING ASSIGNMENT
// =========================

const mobil = {
  nama: "avanza",
  merk: "toyota",
  tahun: 2009,
};

let nama = "camry";
let merk = "mitsubishi";

({ nama, merk } = mobil); // harus diberikan tanda kurung

console.log(nama, merk);
