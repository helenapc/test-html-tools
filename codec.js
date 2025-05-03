function code(cod) {
    let hexCod = '',
        hexF = '';
    for (let i = 0; i < cod.length; i++) {
        hexCod = '' + cod.codePointAt(i).toString(16); //codifica
        if (hexCod.length == 2) {
            hexCod = (parseInt(hexCod, 16) + parseInt('05', 16)).toString(16).toUpperCase();
            hexF += '' + hexCod;
        } else {
            if (hexCod.length == 5) {
                hexF += '' + ("0x" + hexCod);
                i++
            }
            if (hexCod.length == 4) hexF += '' + ("0x" + hexCod + 'Z');
        }
    }
    return hexF;
}

function deco(dec) {
    let str = '',
        decLength = dec.length;
    for (let n = 0; n < decLength; n += 2) {
        let tt = dec.substr(n, 2)
        if (tt == '0x') {
            n += 2
            let strCut = dec.substr((n), 5).split('');
            str += String.fromCodePoint(parseInt(dec.substr(n, (strCut[strCut.length - 1] == 'Z') ? 4 : 5), 16));
            n += 3
        } else {
            str += String.fromCharCode(parseInt(dec.substr(n, 2), 16) - 5);
        };
    }
    return str;
}



document.getElementById('co_btn').addEventListener('click', () => {
    let nco = document.getElementById('co').value;
    document.getElementById('coresp').innerHTML = code(nco);
});

document.getElementById('dec_btn').addEventListener('click', () => {
    let ndec = document.getElementById('dec').value;
    document.getElementById('decresp').innerHTML = deco(ndec);

});