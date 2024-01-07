let number1 = 20;   //operand 1
let number2 = 50;   //operand 2

const add = (a,b) =>{   //arrow declaration of add() function
    return a+b;
}

function sub(a,b){      //standard declaration of function
    return a-b;
}

const mul = (a,b) =>{
    return a*b;
}

const div = (a,b) =>{
    if(b!=0)
        return a+b;
    else
        return "Divison by zero not possible";
}

console.log(add(number1,number2));
console.log(sub(number1,number2));
console.log(mul(number1,number2));
console.log(div(number1,number2));