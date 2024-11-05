const totalEl = document.querySelector('.total-gaji');
const gajiEl = document.querySelector('.gaji');
const inputNameEl = document.querySelector('.name');
const namaKaryawanEl = document.querySelector('.namaKaryawan');
const inputJamEl = document.querySelector('.inputJam');
const inputLemburEl = document.querySelector('.inputLembur');
const listKaryawanEl = document.querySelector('.list-karyawan');

let totalGaji = 0;
let total = 0;

const gajiPerJam = {
    1: 20000,
    2: 42000,
    3: 69000,
    4: 92000,
    5: 114000,
    6: 136000,
};

function updateTextContent() {
    totalEl.textContent = `Total gaji : Rp${totalGaji},00`;
    gajiEl.textContent = `Gaji : Rp${total},00`;
    namaKaryawanEl.textContent = `Nama karyawan : ${inputNameEl.value || ""}`;
}

function calculateGaji() {
    const jamKerja = parseInt(inputJamEl.value) || 0;
    const jamLembur = parseInt(inputLemburEl.value) || 0;
    const lemburGaji = jamLembur * 15000; // 15 rb per jam
    total = (gajiPerJam[jamKerja] || 0) + lemburGaji;
}

function submit() {
    const spanEl = document.createElement("span");
    const namaKaryawanH2 = document.createElement("h2");
    const jamKerjaH2 = document.createElement("h2");
    const jamLemburH2 = document.createElement("h2");
    const gajiKaryawanH2 = document.createElement("h2");

    if (inputNameEl.value && total > 0) {
        calculateGaji();
        totalGaji += total;
        updateTextContent();

        namaKaryawanH2.textContent = `Nama : ${inputNameEl.value || ""}`;
        jamKerjaH2.textContent = `Jam kerja : ${inputJamEl.value || 0} jam`;
        jamLemburH2.textContent = `Jam lembur : ${inputLemburEl.value || 0} jam`
        gajiKaryawanH2.textContent = `Gaji : Rp${total},00`;
        
        spanEl.appendChild(namaKaryawanH2);
        spanEl.appendChild(jamKerjaH2);
        spanEl.appendChild(jamLemburH2);
        spanEl.appendChild(gajiKaryawanH2);
        listKaryawanEl.appendChild(spanEl);
    }

    // Reset input fields
    inputNameEl.value = "";
    inputJamEl.value = 0;
    inputLemburEl.value = 0;
    total = 0;
    updateTextContent();
}

function bayar() {
    if (listKaryawanEl.children.length > 0) {
    alert("Terima kasih telah membayar");
    listKaryawanEl.innerHTML = ''; // Clear all children
    console.log("All children have been removed");
   } else {
    alert("there's nothing u can pay 😐")
   }

   totalGaji = 0; 
   updateTextContent();
}

// Event Listeners
inputJamEl.addEventListener("input", () => {
    calculateGaji();
    updateTextContent();
});

inputLemburEl.addEventListener("input", () => {
    calculateGaji();
    updateTextContent();
});

inputNameEl.addEventListener("input", updateTextContent);
