function addOne(x) {
	return x+4;
}
function pipe() {
	let number = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
		number = arguments[i](number)
	}
	return number;
}
pipe(2, addOne);