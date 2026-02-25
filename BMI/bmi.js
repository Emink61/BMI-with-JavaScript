const weight = document.getElementById("weightInput");
const height = document.getElementById("heightInput");
const buton = document.getElementById("calculateBtn");
const result = document.getElementById("result");

function calculate() {
    const wVal = weight.value;
    const hVal = height.value;
    const bmi = (wVal / ((hVal/100)**2)).toFixed(2);
    if (bmi > 40) {
        result.textContent = `Your result: ${bmi} and you are of Grade 3 obesity.`;
    } else if (bmi > 35 && bmi <= 40) {
        result.textContent = `Your result: ${bmi} and you are of Grade 2 obesity.`;
    } else if (bmi > 30 && bmi <= 35) {
        result.textContent = `Your result: ${bmi} and you are of Grade 1 obesity.`;
    } else if (bmi > 25 && bmi <= 30) {
        result.textContent = `Your result: ${bmi} and you are overweight.`;
    } else if (bmi >= 18.5 && bmi <= 25) {
        result.textContent = `Your result: ${bmi} and you are normal weight.`;
    } else {
        result.textContent = `Your result: ${bmi} and you are underweight.`;
    }
}

buton.addEventListener("click", function(){
    calculate()
})