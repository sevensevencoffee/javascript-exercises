//1. define the string variable 
const reverseString = function(str) {

//2. define the new string varaible that is reversed 
newStr = ""

//3. for loop, i--, 
for (i=str.length-1;i>=0 ;i--) {
    newStr += str[i];
}

//4. return the final value - LAO SHI WANG JI!!!!!!
return newStr;

};

// Do not edit below this line
module.exports = reverseString;
