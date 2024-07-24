//define the starting integer and ending integer
const sumAll = function(x,y) {
//define the new sum variable 
let sum = 0;
//test the negative 
if(x<0 || y<0 ||!Number.isInteger(x) || !Number.isInteger(y)) {
    return "ERROR"
} else {
//Use a for loop to add everything together
for (i=Math.min(x,y); i<=Math.max(x,y); i++){
    sum += i;
}
//return the sum variable
return sum;
} 

};

// Do not edit below this line
module.exports = sumAll;
