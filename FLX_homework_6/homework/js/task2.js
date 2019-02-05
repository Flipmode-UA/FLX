let firstPrice = Number(prompt('Enter the amount of money', '')).toFixed();
let discount = Number(prompt('Enter the amount of discount: 0 - 99', '')).toFixed();
let priceWithDiscount = (firstPrice - firstPrice/100*discount);
let saved = +(firstPrice - priceWithDiscount);
if (Math.round(saved) !== saved) {
	saved = saved.toFixed(2)
}
if (Math.round(priceWithDiscount) !== priceWithDiscount) {
	priceWithDiscount = priceWithDiscount.toFixed(2)
}
let outputTemplate = `Price vithout discount: ${firstPrice}
Discount: ${discount}%
Price with discount: ${priceWithDiscount}
Saved:  ${saved}`;
if (isNaN(firstPrice) || isNaN(discount)) {
	alert('Invalid input data')
} else if (firstPrice<=0 || discount<0) {
	alert('Invalid input data')
} else if (discount>100) {
	alert('Invalid input data')
} else {
	alert(outputTemplate)
}