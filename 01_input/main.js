// function oneChange() {
//     let checkbox = document.getElementById('one');
//     if(checkbox.checked){
//         alert('Выбран');
//     }
//     else{
//         alert('Не выбран');
//     }
// }

function radioSelected() {
    let radios = document.getElementsByName('r1');
    for (var i = 0; i < radios.length; i++) {
        var radio = radios[i];
        if (radio.checked) {
            alert(i);
        }
    }
}