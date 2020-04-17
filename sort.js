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


// 选择排序
let Arr3 = Arr
function selectionSort(Arr3) {
	var len = Arr3.length;
	var minIndex, temp;
	for (var i = 0; i < len - 1; i++) {
			minIndex = i;
			for (var j = i + 1; j < len; j++) {
					if (Arr3[j] < Arr3[minIndex]) {     //寻找最小的数
							minIndex = j;                 //将最小数的索引保存
					}
			}
			temp = Arr3[i];
			Arr3[i] = Arr3[minIndex];
			Arr3[minIndex] = temp;
	}
	return arr;
}

//插入排序
let Arr4 = Arr
function insertionSort(Arr4) {
	var len = Arr4.length;
	var preIndex, current;
	for (var i = 1; i < len; i++) {
			preIndex = i - 1;
			current = Arr4[i];
			while(preIndex >= 0 && Arr4[preIndex] > current) {
				Arr4[preIndex+1] = Arr4[preIndex];
					preIndex--;
			}
			Arr4[preIndex+1] = current;
	}
	return Arr4;
}

//希尔排序
let Arr5 = Arr
function shellSort(Arr5) {
	var len = Arr5.length,
			temp,
			gap = 1;
	while(gap < len/3) {          //动态定义间隔序列
			gap =gap*3+1;
	}
	for (gap; gap > 0; gap = Math.floor(gap/3)) {
			for (var i = gap; i < len; i++) {
					temp = Arr5[i];
					for (var j = i-gap; j >= 0 && Arr5[j] > temp; j-=gap) {
						Arr5[j+gap] = Arr5[j];
					}
					Arr5[j+gap] = temp;
			}
	}
	return Arr5;
}
