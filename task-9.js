var arr = [1,2,3,4,5,6];
var tempEl;
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
        tempEl = arr[i];
        arr[i] = arr[j];
        arr[j] = tempEl;
    }
  };
};

console.log(arr);