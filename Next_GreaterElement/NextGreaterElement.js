function NextGreaterElement(arr, n)
{
    let s = [];
    let arr1 = new Array(n);
     
  
    for (let i = n - 1; i >= 0; i--)
    {
         
        
        while (!s.length == 0 &&
              s[s.length - 1] <= arr[i])
            s.pop();

        if (s.length == 0)
            arr1[i] = -1;        
        else
            arr1[i] = s[s.length - 1];        
     
        s.push(arr[i]);
    }
    for(let i = 0; i < n; i++)
        console.log(arr[i] + " ---> " +
                      arr1[i] );
}
 

let arr = [ 13, 7, 6, 12 ];
let n = arr.length;
 
 NextGreaterElement(arr, n);
