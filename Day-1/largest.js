const arr = [10,20,30,50,60,70,77,92,10,203,204,45,394];

let max = arr[0];

for (let i=1;i<=arr.length;i++){
    if (max < arr[i]) {
        max = arr[i];
    }
}

console.log("The Max Number is",min);