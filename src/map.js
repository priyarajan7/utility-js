var cube = require('./cube');
var identity = require('./identity');

var input = new Array();
var output = new Array();
var function_name;

function map(input, function_name){
    if(input == null)
        return output;
    return function_name(input);
}

module.exports = map;