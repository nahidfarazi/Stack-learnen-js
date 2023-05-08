// let obj = {
//     x:20,
//     y:30,
// }

// function addData(key, value){
//     obj[key] = value
//     console.log(obj);
// }

// addData('z',45)

// delete obj.z
// console.log(obj);


let point = {a:20, b:30, c:40}
function findPoint (item, value){
    point.a=50
    point.d = value
    console.log(point[item]);
}
findPoint('d',40)
