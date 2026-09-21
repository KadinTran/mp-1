
function  addi() {
    let f = document.getElementById('first_number').value;
    let s = document.getElementById('second_number').value;
    let out = Number(f) + Number(s);
    // ternary conditional operator is smtn i rmbd from java
    // I googled if it works in JS too: https://www.w3schools.com/JS/js_if_ternary.asp
    display(out);
    console.log("add");
}

function  subt() {
    let f = document.getElementById('first_number').value;
    let s = document.getElementById('second_number').value;
    let out = Number(f) - Number(s);
    display(out);
    console.log("sub");
}

function  mult() {
    let f = document.getElementById('first_number').value;
    let s = document.getElementById('second_number').value;
    let out = Number(f) * Number(s);
    display(out);
    console.log("mul");
}

function  divi() {
    let f = document.getElementById('first_number').value;
    let s = document.getElementById('second_number').value;
    let out = Number(f) / Number(s);
    display(out);
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
    display(res);
    console.log("exponents");
}

function  display(out) {
    if (out > 1000){
        document.getElementById("judgement").setAttribute("src", "../imgs/cheer.jpeg");
        document.getElementById("judgement").setAttribute("alt", "a blue cheering emoji");
    }
    else if (out === 67){
        document.getElementById("judgement").setAttribute("src", "../imgs/beast.jpeg");
        document.getElementById("judgement").setAttribute("alt", "a blue angry beast emoji");
    }
    else if (out === 0){
        document.getElementById("judgement").setAttribute("src", "../imgs/nervous.jpeg");
        document.getElementById("judgement").setAttribute("alt", "a blue nervous emoji");
    }
    else if (out < 0){
        document.getElementById("output").classList.add('negative')
        document.getElementById("judgement").setAttribute("src", "../imgs/sad.jpeg");
        document.getElementById("judgement").setAttribute("alt", "a blue sad emoji");

    } else {
        document.getElementById("output").classList.remove('negative');
        document.getElementById("judgement").setAttribute("src", "../imgs/happy.jpeg");
        document.getElementById("judgement").setAttribute("alt", "a blue emoji with thumbs up");
    }
    document.getElementById("output").innerHTML = "Result: " + out;
}

function  clears() {
    document.getElementById("output").innerHTML = "Result:";
    document.getElementById("first_number").value = "";
    document.getElementById("second_number").value = "";
    document.getElementById("judgement").setAttribute("src", "../imgs/neutral.jpeg");
    document.getElementById("judgement").setAttribute("alt", "a blue emoji with a neutral smile");
}