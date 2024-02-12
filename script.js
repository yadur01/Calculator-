function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        // Handle error
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
