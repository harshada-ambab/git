

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

//Jquery

$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      active: false
    });
  } );

  
  $( function() {
    $( "#tabs" ).tabs();
  } );
 

 $(document).ready(function(){
   
   $("#add1").click(function(){
     var a= Number($("#number1").val());
     var b= Number($("#number2").val());
     var c= Number(a + b);
     $("#answer1").html(c);
   });
 });

 $(document).ready(function(){
   
   $("#sub2").click(function(){
     var a= Number($("#number1").val());
     var b= Number($("#number2").val());
     var c= Number(a - b);
     $("#answer1").html(c);
   });
 });

 $(document).ready(function(){
   
   $("#mul3").click(function(){
     var a= Number($("#number1").val());
     var b= Number($("#number2").val());
     var c= Number(a * b);
     $("#answer1").html(c);
   });
 });

 $(document).ready(function(){
   
   $("#div4").click(function(){
     var a= Number($("#number1").val());
     var b= Number($("#number2").val());
     var c= Number(a / b);
     $("#answer1").html(c);
   });
 });