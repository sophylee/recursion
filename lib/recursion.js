var range = function(start, end) {
  if (start > end) {
    return [];
  } else {
    return [start].concat(range(start + 1, end));
  }
}

var sum = function(arr) {
  if (arr.length <= 1) {
    return arr[0];
  } else {
    return arr[0] + sum(arr.slice(1, arr.length));
  }
}

var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * exponent(base, exp - 1);
  }
}

var exponent2 = function(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp % 2 === 0) {
    return Math.pow(exponent2(base, exp / 2), 2);
  } else {
    return base * Math.pow(exponent2(base, (exp - 1) / 2), 2);
  }
}

var fibNums = function(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var lastNums = fibNums(n - 1);
    return lastNums.concat(lastNums[lastNums.length - 1] +
                           lastNums[lastNums.length - 2])
  }
}

var binarySearch = function(arr, target) {
  if (arr.length === 1 && arr[0] !== target) {
    return null;
  }

  var midpoint = Math.floor((arr.length) / 2);
  var guess = arr[midpoint];

  if (guess === target) {
    return midpoint;
  } else if (guess > target) {
    return binarySearch(arr.slice(0, midpoint), target);
  } else {
    return midpoint +
           binarySearch(arr.slice(midpoint, arr.length), target);
  }
}

console.log(binarySearch([1, 5, 7, 16, 30], 1))
console.log(binarySearch([1, 5, 7, 16, 30], 30))
console.log(binarySearch([1, 5, 7, 16, 30], 3))

var changeOptions = function(amt, coins) {
  if (amt === 0) {
    return []
  } else {
    var coin = coins[0]
    var coinCount = Math.floor(amt / coin)
    var coinCointArr = []

    for (var i = 0; i < coinCount; i++) {
      coinCointArr[i] = coin
    }

    return coinCointArr.concat(changeOptions(amt - coinCount * coin,
                               coins.slice(1, coins.length)))
  }
}

var makeChange = function(amt, coins) {
  var best = new Array(amt);
  var current = changeOptions(amt, coins)

  for (var i = 0; i < coins.length; i++) {
    if (current.length <= best.length) {
      best = current;
    }
    current = changeOptions(amt, coins.slice(1, coins.length));
  }
  return best
}

var mergeSort = function(arr) {
  var midpoint = Math.floor(arr.length / 2)
  var left = arr.slice(0, midpoint)
  var right = arr.slice(midpoint, arr.length)

  if (arr.length <= 1) {
    return arr;
  } else {
    return merge(mergeSort(left), mergeSort(right));
  }
}

var merge = function(arr1, arr2) {
  var sorted = []

  while(arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }

  return arr1.length ? sorted.concat(arr1) : sorted.concat(arr2);
}

var subsets = function(arr) {
  if (arr.length === 0) {
    return [[]];
  } else {
    var reduced = subsets(arr.slice(0, arr.length - 1))
    var newSets = [];

    reduced.forEach(function(x) {
      newSets.push(x.concat(arr[arr.length - 1]))
    });

    return reduced.concat(newSets);
  }
}