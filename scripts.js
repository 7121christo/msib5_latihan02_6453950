/*
      CHRISTOPHORUS ADYATMA WAHYU SETYA NAYOTTAMA
      UNIVERSITAS KRISTEN DUTA WACANA
      6453950
      Rizky Bagus Pangestu
*/

function hitungNilai() {
  /*Mengambil value dari inputan user*/
  var inputNama = document.getElementById("nama");
  var inputMatkul = document.getElementById("matkul");
  var pilihGrade = document.getElementById("grade");
  var name = inputNama.value;
  var mata = inputMatkul.value;
  var nilai = pilihGrade.options[pilihGrade.selectedIndex].text;

  const valueGrade = { A: 4.0, B: 3.0, C: 2.0, D: 1.0, E: 0 };

  /*Form validtaion, jika value kosong maka memunculkan alert*/
  if (name === "" || mata === "" || nilai === "") {
    alert("Harap isi semua form sebelum klik submit!");
    return;
  }

  var nilaiNumerik = valueGrade[nilai];
  var rataRata = nilaiNumerik;
  var table = document.getElementById("hasilHitung");
  /*Menambahkan cell pada tabel untuk dimasukkan value*/
  var newRow = table.insertRow(-1);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  /*Menambahkan value pada tabel hasil*/
  cell1.innerHTML = name;
  cell2.innerHTML = mata;
  cell3.innerHTML = nilai;
  cell4.innerHTML = rataRata.toFixed(2);

  /*Mengosongkan bagian input user
  setelah user malekukan submit*/
  inputNama.value = "";
  inputMatkul.value = "";
  pilihGrade.value = "";
}
