// JavaScript to handle temperature conversion
document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const convertButton = document.getElementById("convert");
    const resultElement = document.getElementById("conversionResult");

    convertButton.addEventListener("click", function () {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = parseFloat(fahrenheitInput.value);

        if (!isNaN(celsiusValue)) {
            const fahrenheitConverted = (celsiusValue * 9/5) + 32;
            resultElement.textContent = `${celsiusValue} Celsius = ${fahrenheitConverted.toFixed(2)} Fahrenheit`;
        } else if (!isNaN(fahrenheitValue)) {
            const celsiusConverted = (fahrenheitValue - 32) * 5/9;
            resultElement.textContent = `${fahrenheitValue} Fahrenheit = ${celsiusConverted.toFixed(2)} Celsius`;
        } else {
            resultElement.textContent = "Please enter a valid temperature.";
        }
    });
});
