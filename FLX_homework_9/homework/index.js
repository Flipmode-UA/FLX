/*Task 1*/
function findTypes() {
	let result = [];
	for (let argument of arguments) {
		result.push(typeof argument);
	}
	return result;
}
findTypes(null, 5, 'hello');
/*Task 2*/
function executeforEach(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}
executeforEach([2, 5, 8], function(el){
	console.log(el)
});
/*Task 3*/
function mapArray(arr, func) {
	let newArray = [];
	executeforEach(arr, (el)=> {
		newArray.push(func(el))
	});
	console.log(newArray);
}
mapArray([2, 5, 8], function(el) {
	return el + 3
});
/*Task 4*/
function filterArray(arr, fltrFunc) {
	let filteredArray = [];
	executeforEach(arr, (el)=> {
		if (fltrFunc(el)) {
			filteredArray.push(el)
		}
	})
	console.log(filteredArray)
}
filterArray([2, 5, 8], function(el) {
	return el > 3
});
/*Task 5*/
let dataPart = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
]

function getAmountOfAdultPeople(dataPart) {
	let adultAge = 18;
	let amountOfAdultPeople = 0;
	executeforEach(dataPart, (el)=> {
		if (el.age>=adultAge) {
			amountOfAdultPeople++;
		}
	})
	return amountOfAdultPeople;
}
console.log(getAmountOfAdultPeople(dataPart));
/*Task 6*/
function getGreenAdultBananaLovers(dataPart) {
	let adults = [];
	let adultAge = 18;
	let currentFavoriteFruit = 'banana';
	let currentEyeColor = 'green';
	executeforEach(dataPart, (el)=> {
		if (el.age>=adultAge && el.favoriteFruit===currentFavoriteFruit && el.eyeColor===currentEyeColor) {
			adults.push(el);
		}
	});
	let currentSearchingNames = [];
	executeforEach(adults, (el)=>{
		currentSearchingNames.push(el.name);
	})
	return currentSearchingNames;
}
console.log(getGreenAdultBananaLovers(dataPart));
/*Task 7*/
function keys(obj) {
	let objKeys = [];
	for (let key in obj) {
		objKeys.push(key);
	}
	return objKeys;
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));
/*Task 8*/
function values(obj) {
	let objValues = [];
	for (let key in obj) {
		objValues.push(obj[key]);
	}
	return objValues;
}
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));
/*Task 9*/
function showFormattedDate(date) {
	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return `Date: ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));
/*Task 10*/
function isEvenYear(date) {
	return date.getFullYear()%2===0;
}
console.log(isEvenYear(new Date('2019-01-27T01:10:00')));
/*Task 11*/
function isEvenMonth(date) {
	return !date.getMonth()%2===0;
}
console.log(isEvenMonth(new Date('2019-02-27T01:10:00')));