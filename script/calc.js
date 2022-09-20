function checkNaN(a1, a2) {
    if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
    }    
    else {
        a1;
        a2;
    } 
    return a1,a2
}

function tambah(){
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);

    checkNaN(a1, a2);
    var total = a1 + a2; //rumus
    frm.hasil.value = total; //penempatan hasil
}

function kurang(){
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
 
    checkNaN(a1, a2);
    var total = a1 - a2; //rumus
    frm.hasil.value = total; //penempatan hasil    
}

function pangkat(){
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);

    checkNaN(a1,a2);
    var total = Math.pow(a1,a2); //rumus
    frm.hasil.value = total; //penempatan hasil
}

function kali(){
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
 
    checkNaN(a1, a2);
    var total = a1 * a2; //rumus
    frm.hasil.value = total; //penempatan hasil    
}

function kurang(){
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
 
    checkNaN(a1, a2);
    var total = a1 / a2; //rumus
    frm.hasil.value = total; //penempatan hasil    
}