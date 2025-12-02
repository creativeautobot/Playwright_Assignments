function findOccurances(numberArray, targetNumber) {

    let count =0;

    numberArray.forEach((num)=>{

        
        if(num===targetNumber){
            console.log(`The number ${targetNumber} is found`);
            count++;
        }

    });

    if(count===0){
        console.log(`The number ${targetNumber} is not found`);
    }else{
        console.log(`The number ${targetNumber} is found ${count} times`);
    }

}

let numArray = [2,4,6,8,2,4,2,10,2];

findOccurances(numArray,2);