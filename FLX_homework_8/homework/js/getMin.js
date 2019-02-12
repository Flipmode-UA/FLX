function getMin() {
	let argMin = arguments[0];
	for (let i = 0; i < arguments.length; i++) {
		if (argMin<arguments[i]) {
			argMin = arguments[i]
		}
	}
	return argMin;
}
getMin(3, 0, -3);