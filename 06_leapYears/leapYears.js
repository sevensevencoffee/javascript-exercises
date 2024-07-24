//define the variable in there 
const leapYears = function(year) {

//An if statement to check - conditions of % 4 and !%100
if (year%4 == 0 && year%100!=0 || year%400 == 0) {
    return true;
} else {
    return false;
}
//return true or falst

};

// Do not edit below this line
module.exports = leapYears;
