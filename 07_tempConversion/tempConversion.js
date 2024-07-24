//define the F variable in the function
const convertToCelsius = function(F) {
//define the new output C
let C = 0;

//use the formula to convert
C = ((F - 32) * (5/9))*10;

return Math.round(C)/10;

};

//define the C variable in the function 
const convertToFahrenheit = function(Cel) {

//define the new output 
let Fa = 0;

//use the formula to convert
Fa = (Cel * (9/5) + 32)*10;

//return the final F
return Math.round(Fa)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
