function countTrue(r){
	return r.filter(Boolean).length
}
const value = countTrue([0,0,1,1,0])
console.log(value);