const arr = [10,20,30,50,60,70,77,92,10,203,204,45,394];

let min = arr[0];

for (let i=1;i<=arr.length;i++){
    if (min > arr[i]) {
        min = arr[i];
    }
}

console.log("The Min Number is", min);