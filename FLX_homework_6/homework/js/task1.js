let a = Number(prompt('Input value for "a"', ''));
let b = Number(prompt('Input value for "b"', ''));
let c = Number(prompt('Input value for "c"', ''));
let discriminant;
let x, x1, x2;
if (isNaN(a) || a===0) {
	alert('Invalid input data')
} else if (isNaN(b)) {
	alert('Invalid input data');
} else if (isNaN(c)) {
	alert('Invalid input data');
} else if (a!==0 && b===0 && c===0) {
	alert('X = 0')
} else if (a!==0 && b!==0 && c===0) {
	x1 = 0;
	x2 = -b/a;
	alert('X1 = ' + x1 + ', ' + 'X2 = ' + x2);
} else if (a!==0 && b===0 && c!==0) {
	if (-c/a<0) {
		alert('no solution')
	} else {
		x = Math.sqrt(-c/a);
		alert(x)
	}
} else if (a!==0 && b!==0 && c!==0) {
	discriminant = b*b - 4*a*c;
	alert('Discriminant: '+discriminant)
	if (discriminant<0) {
	alert("no solution");
} else if (discriminant===0) {
	x = -b/(2*a);
	alert('X = '+ x);
} else if (discriminant>0) {
	x1 = (-b + Math.sqrt(discriminant))/2*a;
	x2 = (-b - Math.sqrt(discriminant))/2*a;
	alert('X1 = ' + x1 + ', ' + 'X2 = ' + x2);
	}
}