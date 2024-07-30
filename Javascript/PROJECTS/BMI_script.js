const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const result2 = document.querySelector('#result2');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Enter a valid height in cm.";
        result2.innerHTML = "";
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Enter a valid weight in kg.";
        result2.innerHTML = "";
    } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2); // Correct BMI calculation
        result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
        
        if (bmi < 18.6) {
            result2.innerHTML = `<span>You are underweight</span>`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result2.innerHTML = `<span>Your BMI is normal</span>`;
        } else {
            result2.innerHTML = `<span>You are overweight</span>`;
        }
    }
});
