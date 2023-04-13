function calculateBMI(event) {
  event.preventDefault();
  //mendapatkan nilai input dari form
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  //pengecekan bahwa nilaiinput 0 /minus maka alare
  if (height <= 0 || weight <= 0) {
    alert("input tidak valid. inputan harus positif dan tidak minus ");
    return;
    //kenapa  penggunakan tostring kkarena fungsi length hanya dapat digunakan pada objek bertipe string.
    //Kode yang Anda berikan menggunakan fungsi toString() untuk mengkonversi angka menjadi string sehingga dapat memeriksa panjang digit dari angka tersebut.
  } else if (weight.toString().length >= 4 || height.toString().length > 4) {
    alert("Inputan untuk berat dan tinggi maksimal 3 angka.");
    return;

    //agar tidak konversi di to strinng maka bisa memberikan nilai maksimal 1000
    // } else if (weight >= 1000 || height >= 1000) {
    //   alert("Harap masukkan berat badan dan tinggi badan dengan nilai kurang dari 1000.");
    //   return;
  }

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
