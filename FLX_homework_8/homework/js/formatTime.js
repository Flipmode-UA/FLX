function formatTime(a) {
	let minutes = a%60;
	let hours = a<60?0:(a-a%60)/60;
	let days = a<1440?0:(a-a%1440)/1440;
	let result = days+' day(s) '+hours+' hour(s) '+minutes+' minute(s).'
	return result;
}
formatTime(3601);