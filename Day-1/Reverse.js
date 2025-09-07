let arr = [10,20,30,40,50,60,70];

console.log(arr);
for (let i = 0; i < arr.length/2; i++) {
    let temp = arr[arr.length-1-i]
    arr[arr.length-1-i]=arr[i];
    arr[i]=temp;
}
console.log(arr)

// 0->