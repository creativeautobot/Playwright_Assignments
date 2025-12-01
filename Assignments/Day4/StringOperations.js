function getLastStringfromSentense(sentense){

    let stringsarray = sentense.trim().replace("  ","").split(" ");

    let lastString = stringsarray[stringsarray.length-1];

    return lastString.length
}

console.log(getLastStringfromSentense("Hello Worls" ));

function areAnagrams(string1, string2){

    let cleanAndSort = (str) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');

    const sortedString1= cleanAndSort(string1);
    const sortedString2= cleanAndSort(string2);

    return sortedString1 === sortedString2;

}

let result = areAnagrams("listen", "test23");

if(result){

    console.log("The strings are Anagrams");
}else{

    console.log("The strings are Not Anagrams");
}




