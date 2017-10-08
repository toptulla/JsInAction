function addCheckingAction() {
    let checkboxes = document.getElementsByTagName('input');
    for (var i = 0; i < checkboxes.length; i++) {
        var checkbox = checkboxes[i];
        checkbox.addEventListener('onchange', checking);
    }
}

function checking() {
    console.log('Yes');
    if (this.checked) {
        alert(this.id + ' Checked');
    } else {
        alert(this.id + ' Unchecked');
    }
}

addCheckingAction();