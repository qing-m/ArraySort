function rendom(max,min) {
	return  Math.floor(Math.random() * (max - min)) + min;
}
let length = 5
let Arr = []
for(let i=0;i<length;i++) {
	Arr.push(rendom(0,100))
}
console.log(Arr)

// api
let Arr1 = Arr.sort((a,b)=>{
	return a<b
})
console.log(Arr1)

// 冒泡排序
let Arr2 = Arr
for(let i=0;i<=Arr2.length;i++) {
	for(let j=0;j<=i-1-i;j++) {
		console.log([i,j])
		if(Arr2[i] > Arr[j]) {
			var temp = arr[j+1];
			arr[j+1] = arr[j];
			arr[j] = temp;
		}
	}
}
console.log(Arr2)
