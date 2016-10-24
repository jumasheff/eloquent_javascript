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

