const arr = new Array(1,2,3)
const arr2 = [4,5,6]

arr.push(...arr2)
//junta duas arrays usando ...(spread)
console.log(arr)
