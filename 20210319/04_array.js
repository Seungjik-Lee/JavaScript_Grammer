const array = [1, 2, 3, 4, "이승직", ["이동준",1,2,3]]

console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array[5][0])

console.log(array[1+2])
console.log(array[2*2])

//배열 삽입
array[6] = "김민성"
console.log(array[6])

console.log("길이" + array.length)
console.log("0번째" + array[0])
console.log("1번째" + array[1])
console.log("2번째" + array[2])
console.log("3번째" + array[3])
console.log("4번째" + array[4])
console.log("5번째" + array[5])
console.log("6번째" + array[6])
console.log("7번째" + array[7])

array[7] = "AI빅데이터반"
console.log("7번째" + array[7])

//배열 삭제
array.splice(7,1) //7번째에 있는거 1개 제거
console.log(array)
array.splice(0,2) //0번째에 있는거 2개 제거
console.log(array)


//특정값 제거하기(값으로 제거하기)
const index = array.indexOf("AI빅데이터반")
array.splice(index,1)
console.log(array)