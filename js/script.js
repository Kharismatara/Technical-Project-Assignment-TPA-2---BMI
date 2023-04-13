function calculateBMI(event) {
  event.preventDefault();
  //mendapatkan nilai input dari form
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  //pengecekan bahwa nilaiinput 0 /minus maka alare
  if (height <= 0 || weight <= 0) {
    alert("input must be positive and not minus");
    return;
    //kenapa  penggunakan tostring kkarena fungsi length hanya dapat digunakan pada objek bertipe string.
    //Kode yang Anda berikan menggunakan fungsi toString() untuk mengkonversi angka menjadi string sehingga dapat memeriksa panjang digit dari angka tersebut.
  } else if (weight.toString().length > 3 || height.toString().length > 3) {
    alert("Input for maximum weight and height of 3 numbers.");
    return;
  } //agar tidak konversi di to strinng maka bisa memberikan nilai maksimal 1000
  //pada logiknya kita tidak ada tinggi lebih dari 300 cm  dan berat badan lebih dari 700
  // else if (weight >= 700 || height > 300) {
  //   alert("Harap masukkan berat badan dan tinggi badan dengan nilai kurang dari 700.");
  //   return;
  // }

  let bmi = weight / Math.pow(height / 100, 2);

  //untuk menampilkan nilai 2.123 = 21.1
  document.getElementById("bmi").textContent = bmi.toFixed(1);

  let bmiCategory = "";
  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi < 25) {
    bmiCategory = "Normal Weight";
  } else if (bmi < 30) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obesity";
  }

  document.getElementById("bmiCategory").textContent = bmiCategory;
  document.getElementById("result").style.display = "block";
}

function reloadPage() {
  // Menggunakan location.reload() untuk me-reload halaman web dari cache
  location.reload();
}
