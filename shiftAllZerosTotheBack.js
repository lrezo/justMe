'use script';
(function (){
    function pushTheZeros(array){
        let newArray = [];
        let counter = 0;
        array.filter((elem) => {
            if (elem !==0){
                 newArray.push(elem);
            }
            else {
                counter++;
            }
        })
        pushExactNumbers(newArray,counter,0);

        return newArray;
    }
    function pushExactNumbers(array,howManyTimes,value){
        for (let i = 0; i < howManyTimes; i++) {
            array.push(value);
        }
    }
    const arrayNumbers = [0,0,0,5,8,4,7,9,0,0,5,0,4,0,8];
    console.log(pushTheZeros(arrayNumbers));
})()