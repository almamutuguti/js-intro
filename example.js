let lengthInput = document.getElementById('length');
let widthInput = document.getElementById('width');

let button = document.getElementById('calculate-btn');
let result = document.getElementById('result');

calculateArea.onclick = () => {
    let length = +lengthInput.ariaValue;
    let width = +widthInput.ariaValue;
    let area = length * width;
    result.innerText = 'Area: ' + area;
}
