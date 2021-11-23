var numbers = new Array();
const max = (numbers) => {
    var result = numbers[0];
    for(i=1; i<numbers.length; i++){
        if(numbers[i] > result)
            result = numbers[i];
    }
    return result;
}

module.exports = max;