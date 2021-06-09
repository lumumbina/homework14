document.write('Задание 1. Выведение массива чисел<br>');
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
document.write(arr[i], ' ')
}

document.write('<br>Задание 2. Выведение отрицательных чисел<br>');
let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < arr1.length; i++) {
	if(arr1[i] > -10 && arr1[i] < -3) {
	document.write(arr1[i], ' ');
	}
}

document.write('<br>Задание 3. Массив от 23 до 57<br>');
let arr2 = [];
let result = 0;
for (let i = 23; i <= 57; i++) {
	arr2.push(i);
	result += i;
}
	document.write(arr2, '<br>');
	document.write('сумма равна '+result, '<br>');
let arr3 = [];
let j = 23;
while (j >= 23 && j <= 57) {
	arr3.push(j);
	j++;
}
document.write(arr3);

document.write('<br>Задание 4. Числа на 1, 2, 5<br>');
let arr4 = ["10", "20", "30", "50", "235", "3000"];
	for (let i = 0; i < arr4.length; i++){
	if (arr4[i][0] == "1" || arr4[i][0] == "2" || arr4[i][0] == "5") {
	document.write(arr4[i], ' ');
	}
}

document.write('<br>Задание 5. Дни недели<br>');
let arr5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for (let i = 0; i < arr5.length; i++) {
	if (arr5[i] == 'СБ' || arr5[i] == 'ВС')	{
		let arr5Bold = arr5[i].bold([i]);
		document.write(arr5Bold, ' ');
	} else document.write(arr5[i], ' ');
}

document.write('<br>Задание 6. Массив с произвольными данными<br>');
let arr6 = ['Резистор', 'авокадо', 1, 2, 3, 4, 'апельсин'];
	arr6.push('мандарин');
	document.write('Последний цифровой элемент массива: ', arr6.length - 1, ' ');
	let arr6Last = arr6.slice(arr6.length - 1);
	document.write('Последний элемент массива: ', arr6Last);

document.write('<br>Задание 7. Запрос по prompt<br>');
let arr7 = [];
let check = true;
while(check) {
	let p = prompt('Введите любое число', 0);
	if (p === ' ' || p === null || isNaN(p)) {
		check = false;
	} else {
		arr7.push(Number(p));
	}
}
console.log(arr7);
arr7.sort(function(a, b) {
	return a - b;
})
console.log(arr7);

document.write('<br>Задание 8. Reverse<br>');
let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
	arr8.reverse();
let arr8_1 = [12, false, 'Текст', 4, 2, -5, 0];
let arr8_1_1 = [];
	i = (arr8_1.length - 1);
let k = 0;
while (i >= 0) {
	arr8_1_1[i] = arr8_1[k];
	i--;
	k++;
}
	document.write('Массив наоборот с помощью reverse: ', arr8, '</br>');
	document.write('Массив наоборот с помощью while: ', arr8_1_1, '</br>');
	
document.write('<br>Задание 9. Количество нулевых значений<br>');
let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
	let n = 0;
	for (let elem of arr9) {
		if (elem == undefined) {
		n += 1;
		}
	}
	document.write('количество пустых (нулевых) значений равно: ', n);

document.write('<br>Задание 10. Сумма между нулями<br>');
let arr10 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
	sum = 0;
let first = arr10.indexOf(0);
let last = arr10.lastIndexOf(0);
	if (arr10.indexOf(0) == -1) {
		sum = 0;
		document.write('Сумма равна 0');
	}

for (let i = first; i < last; i++) {
	sum += arr10[i];
} 	
document.write('Сумма чисел между первым и вторым нулями равна: ', sum);