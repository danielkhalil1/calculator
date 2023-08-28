let calculation = '';
function updateCalculation (value) {
    calculation += value;
}
function displayCalculation (){
    document.querySelector('.paragraph').innerHTML = calculation;
}
function clear () {
    calculation = '';
    document.querySelector('.paragraph').innerHTML = '';
}