function bmicalc(weight,height) {
    var bmi = weight / (height * height);
    return Math.floor(bmi);
}

var bmi = bmicalc(65,1.8);
console.log(bmi);

if (bmi <= 18.5) {
  document.write("your bmi is " + bmi + " so you are underweight.");
}

if (bmi > 18.5 && bmi <= 24.9) {
  document.write("your bmi is " + bmi + " so you have a normal weight.");
}

if (bmi > 24.9) {
  document.write("your bmi is " + bmi + " so you are overweight.");
}
