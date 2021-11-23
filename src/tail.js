var numbers = new Array();
const tail = (numbers) => {
    if(numbers == null)
        return null;
    else{
        var result = new Array();
        for (i=1; i<numbers.length; i++) {
            result.push(numbers[i]);
        }
        return result;
    }
}
module.exports = tail;