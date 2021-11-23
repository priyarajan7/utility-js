var input = new Array();
var output = new Array();
var function_name;

function filter(input, function_name){
    if(input == null)
        return output;
    else{
        output = input.filter(function_name);
        return output;
    }
}

module.exports = filter;