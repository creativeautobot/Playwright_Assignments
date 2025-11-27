
function numberType(number){

    let result= null;

    if(number!==0 && number>0){

        result = "Positive Number";
    } else if(number!==0 && number<0){

        result = "Negative Number";
    } else {

        result = "Neutral";
    }

    return result;

}

console.log(numberType(-3));