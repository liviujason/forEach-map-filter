// function doubleValues(arr) {
//    const newArr = [];
//    arr.forEach(function(val) {
//       newArr.push(val * 2);
//    });
//    return newArr;
// };

// function onlyEvenValues(arr) {
//    let newArr = [];
//    arr.forEach(function(val) {
//       if(val % 2 === 0) {
//          newArr.push(val);
//       }
//    });
//    return newArr;
// }

// function showFirstAndLast(arr) {
//    newArr = [];
//    arr.forEach(function(val) {
//       newArr.push(val[0] + val[val.length - 1]);
//    });
//    return newArr;
// }

// function addKeyAndValue(arr, key, value){
//    arr.forEach(function(val) {
//       val[key] = value;
//    });
//    return arr;
// }

// function vowelCount(str){
//    let obj = {};
//    let splitArr = str.split("");
//    const vowels = "aeiou";

//    splitArr.forEach(function(letter) {
//       let lowerCasedLetter = letter.toLowerCase();
//       if(vowels.indexOf(lowerCasedLetter) !== -1) {
//          if(obj[lowerCasedLetter]) {
//             obj[lowerCasedLetter]++;
//          } else {
//             obj[lowerCasedLetter] = 1;
//          }
//       }
//    });
//    return obj;
// }

// function doubleValuesWithMap(arr) {
//    return arr.map(function(val) {
//       return val * 2;
//    });
// }

// function valTimesIndex(arr) {
//    return arr.map(function(val, i) {
//       return val * i;
//    });
// }

// function extractKey(arr, key) {
//    return arr.map(function(val) {
//       return val[key];
//    });
// }

// function extractFullName(arr) {
//    return arr.map(function(val) {
//       return val.first + ' ' + val.last;
//    });
// }

// function filterByValue(arr, key) {
//    return arr.filter(function(val) {
//          return val[key] !== undefined;
//    });
// }

// function find(arr, value) {
//    return arr.filter(function(val) {
//       if(val === value){
//          return val;
//       } else {
//          return undefined;
//       }
//    });
// }


// function findObj(arr, key, value) {
//    return arr.filter(function(val) {
//       return val[key] === value;
//    })[0];
// }

// function findInObj(arr, key, searchValue) {
//    return arr.filter(function(val) {
//      return val[key] === searchValue;
//    });
// }

// function removeVowels(str) {
//    const vowels = "aeiou";
//    return str
//      .toLowerCase()
//      .split("")
//      .filter(function(val) {
//        return vowels.indexOf(val) === -1;
//      })
//      .join("");
// }

// function doubleOddNumbers(arr) {
//    return arr
//      .filter(function(val) {
//        return val % 2 !== 0;
//      })
//      .map(function(val) {
//        return val * 2;
//       });
// }
