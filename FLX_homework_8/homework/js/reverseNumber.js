function reverseNumber(a) {
		a = a + '';
		return parseInt(a.split('').reverse().join(''), 10) * Math.sign(a);
}
reverseNumber(123);