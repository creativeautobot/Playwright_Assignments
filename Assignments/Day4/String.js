console.log(isPalidrome("madam"));

function getReverseString(teststring){

    let reversedstring = "";

    for(let i=teststring.length -1; i>=0; i--){

            reversedstring+= teststring.charAt(i);
}

return reversedstring;
}

function isPalidrome(teststring){

let expectedstring = getReverseString(teststring);

if(teststring === expectedstring){

console.log(`Given String - '${teststring}' is Palidrome`);

return true;

}else{

console.log(`Given String - '${teststring}' is Not Palidrome`);

return false;
}

}