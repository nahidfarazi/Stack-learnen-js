let arr = [20,23,44,445,87,90]
var find = 10

for (let i = 0; i < arr.length; i++) {
    if(arr[i] === find){
        console.log('number found at Index:', i, 'and Your number is :', find);
        break;
    }else{
        console.log('number not found');
        break;
    }
    
}