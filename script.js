function bmicalc(weight,height) {
    var bmi = weight / (height * height);
    return Math.floor(bmi);
}

var bmi = bmicalc(65,1.8);
console.log(bmi);
