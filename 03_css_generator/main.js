let prepare = function(){
    let ranges = document.getElementsByClassName('rangeControl');
    for (var i = 0; i < ranges.length; i++) {
        var element = ranges[i];
        element.addEventListener('input', onInputRange);
    }
}();

function onInputRange() {
    let rtl = document.getElementById('rtl').value;
    let rtr = document.getElementById('rtr').value;
    let rbr = document.getElementById('rbr').value;
    let rbl = document.getElementById('rbl').value;

    let ttl = document.getElementById('ttl');
    let ttr = document.getElementById('ttr');
    let tbr = document.getElementById('tbr');
    let tbl = document.getElementById('tbl');

    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    let view = document.getElementById('view');
    view.style.borderRadius = rtl+'px '+rtr+'px '+rbr+'px '+rbl+'px';
};