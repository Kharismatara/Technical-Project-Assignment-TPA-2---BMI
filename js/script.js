function calculateBMI(event) {
  event.preventDefault();
  //mendapatkan nilai input dari form
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
    alert("The value entered cannot be 0 or minus");
    return;
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
