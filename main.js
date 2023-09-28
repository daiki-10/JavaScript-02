function appendToDisplay(value) {
    const display = document.getElementById("display");
    
    const currentValue = display.value;
    
    if (currentValue === "0" && !isNumeric(value) && value !== ".") {
        return;
    }
    
    if (currentValue === "" && value === "0") {
        return;
    }

    display.value += value;
}

function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        if (/[^0-9+\-*/.]/.test(display.value)) {
            alert("不正な文字列が含まれています。");
            clearDisplay();
            return;
        }

        const result = safeEval(display.value);
        display.value = result;
    } catch (error) {
        alert("計算エラーが発生しました。");
        clearDisplay();
    }
}

function safeEval(expression) {
    return Function('"use strict"; return (' + expression + ')')();
}