function plus(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var sum = parseInt(x) + parseInt(y);
    document.getElementById("result").innerHTML="The sum of "+x+" and "+y+" is "+sum;
    console.log(output);
}

function minus(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var diff = x - y;
    document.getElementById("result").innerHTML="The difference of "+x+" and "+y+" is "+diff;
    console.log(output);
}

function multiply(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var product = x * y;
    document.getElementById("result").innerHTML="The product of "+x+" and "+y+" is "+product;
    console.log(output);
}

function divide(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var quotient = x / y;
    document.getElementById("result").innerHTML="The quotient of "+x+" and "+y+" is "+quotient;
    console.log(output);
}

function modulo(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var mod = x % y;
    document.getElementById("result").innerHTML="The remainder when "+x+" and "+y+" is divided is "+mod;
    console.log(output);
}