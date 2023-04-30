let arr =[3, 2, 5, 6, 1]
let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//    sum += arr[i]
    
    
// }
// console.log(sum);

for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 1){
            sum += arr[i]
            
         }
}

console.log('evenNumber :', sum);

