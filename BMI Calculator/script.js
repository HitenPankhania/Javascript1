function bmiCalculator(weight,height){
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);

    // Math.round ( is use to round up )
}

// if my weight is 65 and height is 1.8m , I should be able to call the function like this


// BMI should equal around 20 in tis case

var bmi = bmiCalculator(65 , 1.8);
console.log(bmi);