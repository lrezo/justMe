'use strict';
(function (){
    const mappingLetters = {
        1:"a", 2:"b", 3:"c", 4:"d", 5:"e", 7:"f", 8:"g", 9:"h", 10:"i", 11:"j", 12:"k", 13:"l", 14:"m", 15:"n", 16:"o",
        17:"p", 18:"q", 19:"r", 20:"s", 21:"t", 22:"u", 23:"v", 24:"w", 25:"x", 26:"y",27:"z"
    }
    let completeEquivalence = "";
    let completeEquivalenceArrayBeginning = "";
    let completeEquivalenceArrayBottom = "";
    let arrayOfTestFromBeginning = [];
    let arrayOfTestFromBottom = [];

    function getEquivalentInLetters(number){
        return number.toString().split("");
    }
    function getEquivalentLettersArray(number){
        const variable = number.toString().split("");
        if (variable.length % 2 !== 0){
            for (let i = 1; i < variable.length; i+=2) {
                arrayOfTestFromBeginning.push(variable[i-1]+variable[i]);
            }
            arrayOfTestFromBeginning.push(variable[variable.length-1])

            for (let i = 1; i < variable.length; i+=2) {
                arrayOfTestFromBottom.push(variable[i]+variable[i+1]);
            }
            arrayOfTestFromBottom.unshift(variable.at(0))
        }
        else {
            for (let i = 0; i < variable.length/2; i++) {
                if (i < variable.length){
                    arrayOfTestFromBeginning.push(variable[i]+variable[i+1]);
                }
            }
        }

    }
    getEquivalentLettersArray(12345)
    console.log(arrayOfTestFromBeginning)
    console.log(arrayOfTestFromBottom)

    let test = getEquivalentInLetters(111);

    for (let i = 0; i < test.length; i++) {
        completeEquivalence+=mappingLetters[test[i]];
    }
    for (let i = 0; i < arrayOfTestFromBeginning.length; i++) {
        completeEquivalenceArrayBeginning+=mappingLetters[arrayOfTestFromBeginning[i]];
    }
    for (let i = 0; i < arrayOfTestFromBottom.length; i++) {
        completeEquivalenceArrayBottom+=mappingLetters[arrayOfTestFromBottom[i]];
    }


    console.log(completeEquivalence);
    console.log(completeEquivalenceArrayBeginning);
    console.log(completeEquivalenceArrayBottom);

})()