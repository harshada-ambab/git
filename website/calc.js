

function add(){

    var input1 = parseInt(document.getElementById('num1').value);
    var input2 = parseInt(document.getElementById('num2').value);
    var add = input1 + input2;

    document.getElementById('answer').innerHTML = add;
}


function sub() {
    var input1 = parseInt(document.getElementById('num1').value);
    var input2 = parseInt(document.getElementById('num2').value);
    var add = input1 - input2;

    document.getElementById('answer').innerHTML = add;
}

function mul() {
    var input1 = parseInt(document.getElementById('num1').value);
    var input2 = parseInt(document.getElementById('num2').value);
    var add = input1 * input2;

    document.getElementById('answer').innerHTML = add;
}

function div() {
    var input1 = parseInt(document.getElementById('num1').value);
    var input2 = parseInt(document.getElementById('num2').value);
    var add = input1 / input2;

    document.getElementById('answer').innerHTML = add;
}

function mod() {
    var input1 = parseInt(document.getElementById('num1').value);
    var input2 = parseInt(document.getElementById('num2').value);
    var add = input1 % input2;

    document.getElementById('answer').innerHTML = add;
}

