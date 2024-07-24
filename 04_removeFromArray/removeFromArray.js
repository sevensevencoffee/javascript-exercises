//1. Define variables - an array and the argument to remove
const removeFromArray = function(array, ...args) {

//2. create a new array that will store the new value 
newArray = [];

//3. check if the args are included 
array.forEach(element => {
    if (!args.includes(element)){
        newArray.push(element);
    }
});

//4. return the new array 
return newArray;

}
// Do not edit below this line
module.exports = removeFromArray;
