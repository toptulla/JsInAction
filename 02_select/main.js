// function showInfo() {
//     let index = document.getElementById('mySelect').selectedIndex;
//     let options = document.getElementById('mySelect').options;
//     alert(options[index].text);
// }

// let prepare = function(){
//     let select = document.getElementById('mySelect');
//     select.addEventListener('change', onChangeSelect);
// }();

// function onChangeSelect() {
//     let index = this.selectedIndex;
//     let options = this.options;
//     alert('Выбранная опция: ' + options[index].text);
// };

let prepare = function(){
    let range = document.getElementById('viewRange');
    range.addEventListener('input', onInputRange);
}();

function onInputRange() {
    let rangeValue = this.value;
    let view = document.getElementById('view');
    view.style.width = rangeValue+'px';
};

//Инструкция объявления функции
// function name(params) {
    
// }
// Выражение определения функции
// let name = function name() {
    
// }