 var output = new Array();

 function cube(input){
    for (i=0; i<input.length; i++) {
        output.push(input[i] * input[i] * input[i]);
    }
    return output;
}

module.exports = cube;