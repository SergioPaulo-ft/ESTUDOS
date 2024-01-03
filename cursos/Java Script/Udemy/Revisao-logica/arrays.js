const arr = [5,6,6,5]//criando uma array
//diferntes tipos de arrays:
const arr2 = new Array(true,"abc",8,arr,new Array(1,2,3,4))
console.log(typeof arr2)//todo array é um objeto
//usando arrays individualmente
arr[0] = 8 //começa do 0
arr[1] = 7
arr[4] = "array add" //adiocionando array
arr[5] = arr2.push("a","b","d") //add usando push
arr[6] = arr2.length //tamanho do array--> .length
console.log( 'arr[0]: ' + arr[0] + '...' )
console.log( "arr2-->4: " + arr2[4] + "   arr2-->4-->0: " + arr2[4][0] ) //pegando arr atraves do arr2
console.log( arr2)
console.log( arr[5])

