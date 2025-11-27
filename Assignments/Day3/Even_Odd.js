
function isOddOrEven(number){

    let result=null;

    if(number % 2 === 0){

        result = "Even";

    } else {

        result = "Odd";
    }

    return result;
    
}

console.log(isOddOrEven(139));