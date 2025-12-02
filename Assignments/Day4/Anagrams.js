function areAnagrams(str1,str2){

let mymap = new Map();

if(str1.length!=str2.length){

    return false;
}else{

   str1.replace(' ', '').toLowerCase().split('').forEach(char => {
        
    mymap.set(char, (mymap.get(char) || 0) + 1);


   });   str2.replace(' ', '').toLowerCase().split('').forEach(char => {

    mymap.set(char, (mymap.get(char) || 0) - 1);
    });

    for (let count of mymap.values()) {
        if (count !== 0) {
            return false;
            }
        
    }
    return true;        
}

}


