var numbers = new Array();
const head = (numbers) => {
    if(numbers == null)
        return null;
    return numbers[0];
}

module.exports = head;