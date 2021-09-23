function maxDiff( arr, arr_size)
{    
  let max_diff = arr[1] - arr[0];
  for (let i = 0; i < arr_size; i++)
  {
    for (let j = i+1; j < arr_size; j++)
    {    
      if (arr[j] - arr[i] > max_diff)
        max_diff = arr[j] - arr[i];
    }
  }        
  return max_diff;
}
    let arr = [7, 9, 5, 6, 3, 2];
    let n = arr.length;
     
    console.log("Maximum difference is " + maxDiff(arr, n));
   