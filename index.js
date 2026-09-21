
function  addi() {
    let f = document.getElementById('first_number').value;
    let s = document.getElementById('second_number').value;
    let out = Number(f) + Number(s);
    // ternary conditional operator is smtn i rmbd from java
    // I googled if it works in JS too: https://www.w3schools.com/JS/js_if_ternary.asp
    out < 0 ? document.getElementById("output").classList.add('negative')
        : document.getElementById("output").classList.remove('negative');
    document.getElementById("output").innerHTML = out;
    console.log("add");
}

function  subt() {
    let f = document.getElementById('first_number').value;
    let s = document.getElementById('second_number').value;
    let out = Number(f) - Number(s);
    out < 0 ? document.getElementById("output").classList.add('negative')
        : document.getElementById("output").classList.remove('negative');
    document.getElementById("output").innerHTML = out;
    console.log("sub");
}

function  mult() {
    let f = document.getElementById('first_number').value;
    let s = document.getElementById('second_number').value;
    let out = Number(f) * Number(s);
    out < 0 ? document.getElementById("output").classList.add('negative')
        : document.getElementById("output").classList.remove('negative');
    document.getElementById("output").innerHTML = out;
    console.log("mul");
}

function  divi() {
    let f = document.getElementById('first_number').value;
    let s = document.getElementById('second_number').value;
    let out = Number(f) / Number(s);
    out < 0 ? document.getElementById("output").classList.add('negative')
        : document.getElementById("output").classList.remove('negative');
    document.getElementById("output").innerHTML = out;
    console.log("div");
}

function  expo() {
    let f = document.getElementById('first_number').value;
    let s = document.getElementById('second_number').value;
    let out = 1;
    let abs = Math.abs(s);
    for(let i = 0; i < abs; i++){
        out *= f;
    }
    let res = s < 0 ? 1 / out : out;
    out < 0 ? document.getElementById("output").classList.add('negative')
        : document.getElementById("output").classList.remove('negative');
    document.getElementById("output").innerHTML = res;
    console.log("exponents");
}

function  clears() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("first_number").value = "";
    document.getElementById("second_number").value = "";
}