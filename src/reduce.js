var input = new Array();
var output = new Array();
var function_name;

function reduce(input, function_name){
    if(input.length == 0)
        return undefined;
    else{
        output = input.reduce(function_name);
        return output;
        }
}

module.exports = reduce;