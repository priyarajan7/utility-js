var numbers = new Array();
const min = (numbers) => {
    var result = numbers[0];
    for(i=1; i<numbers.length; i++){
        if(numbers[i] < result)
            result = numbers[i];
    }
    return result;
}

module.exports = min;