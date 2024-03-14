//Given this function:
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

/* Here's an ES2015 Version: */
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

//findMin function:
function findMin(...args){
    return Math.min(...args);
};

// console.log(findMin(1,4,12,-3));
// console.log(findMin(1, -1));
// console.log(findMin(3,1));

//mergeObjects function:
function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
};

// console.log(mergeObjects({a:1, b:2}, {c:3, d:4}));

//doubleAndReturnArgs:
const doubleAndReturnArgs = (arr, ...args) => {
    const doubledArgs = args.map((arg) => arg * 2);
    return [...arr, ...doubledArgs];
};

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// console.log(doubleAndReturnArgs([2], 10, 4));

//Slice and Dice!
//I will start by removing a random element from the items array so that a new array can be returned without that item. 
const removeRandom = (items) => {
    const idxToRemove = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idxToRemove), ...items.slice(idxToRemove + 1)];
};

//I will have a new array returned with every item from 2 arrays:
const extend = (arr1, arr2) => [...arr1, ...arr2];

//Now I will have a new object returned to have a new key/value pair containing all values and keys from the object:
const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

//It's time to remove key from a new object:
const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
};

//Time to combine 2 objects to return a new object:
const combine = (obj1, obj2) => ({...obj1, ...obj2});

//Now I will return a new object with a modified key and value
const update = (obj, key, val) => ({...obj, [key]: val});

