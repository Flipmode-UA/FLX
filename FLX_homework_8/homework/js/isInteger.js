function isInteger(a) {
	if (typeof a==='number' && (a%1)===0) {
		return true
	}
	return false
}
isInteger(5.1);