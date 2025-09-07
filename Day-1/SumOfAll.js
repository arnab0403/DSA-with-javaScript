const arr = [10,20,30,50,60,70,77,92,10,203,204,45,394];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
     sum = arr[i]+sum;
}

console.log(sum);