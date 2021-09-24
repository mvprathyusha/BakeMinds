const arr = [1, 2, 3, 4, 5, 6];
var new_array = arr.concat(); 

for (var i = 1; i < arr.length; i++) {
 new_array[i] = new_array[i-1] + arr[i];
}

console.log(new_array);