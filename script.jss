//plus operation

plusButton = document.getElementById("plusButton");
plusOperation = function(){
    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    sum = parseInt(number1.value) + parseInt(number2.value);
    result = document.getElementById("result");
    result.innerText = "Ans: " + sum;
}
plusButton.addEventListener("click",plusOperation);


//mius operation

minusButton = document.getElementById("minusButton");
minusOperation = function(){
    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    sub = parseInt(number1.value) - parseInt(number2.value);
    result = document.getElementById("result");
    result.innerText = "Ans: " + sub;
}
minusButton.addEventListener("click",minusOperation);

// multiplication operation

mulButton = document.getElementById("mulButton");
mulOperation = function(){
    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    multi = parseInt(number1.value) * parseInt(number2.value);
    result = document.getElementById("result");
    result.innerText = "Ans: " + multi;
}
mulButton.addEventListener("click",mulOperation);

// division operation

diviButton = document.getElementById("diviButton");
diviOperation = function(){
    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    div = parseInt(number1.value) / parseInt(number2.value);
    result = document.getElementById("result");
    result.innerText = "Ans: " + div;
}
diviButton.addEventListener("click",diviOperation);


//Modulus Operation

modButton = document.getElementById("modButton");
modOperation = function(){
    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    mod = parseInt(number1.value) % parseInt(number2.value);
    result = document.getElementById("result");
    result.innerText = "Ans: " + mod;
}
modButton.addEventListener("click",modOperation);


