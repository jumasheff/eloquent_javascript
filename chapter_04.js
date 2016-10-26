var count = 0;
function nthRecursive(list, position) {
  if(list !== null) {
    if(position === count) {
      return list.value
    }
    count++;
    return nthRecursive(list.rest, count)
  }
  return undefined
}

var l = {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}};
console.log(nthRecursive(l, 1));

function deepEqual(obj1, obj2) {
  var valuesAreObjects = function(val1, val2) {
    return typeof val1 === "object" && typeof val2 === "object"
  }
  
  for (key in obj1) {
    if (!key in obj2) {
      return false
    }
    var obj1Key = obj1[key];
    var obj2Key = obj2[key];
    
    if (valuesAreObjects(obj1Key, obj2Key)) {
      deepEqual(obj1Key, obj2Key)
    } else {
      if(obj1Key !== obj2Key)
        return false
    }
  }
  return true
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
