const userName = prompt('Login', '');
if (userName==="User") {
	let password = prompt('Enter Your password', '')
		if (password==='UserPass') {
			new Date().getHours()<20?alert('Good day, dear User!'):alert('Good evening, dear User!')
		} else if (password===null || password==='') {
			alert('Canceled.') 
		} else if (password.length>0 && password!=='UserPass') {
			alert('Wrong password')
		}
} else if(userName==='Admin') {
	let password = prompt('Enter Your password', '')
		if (password==='RootPass') {
			new Date().getHours()<20?alert('Good day, dear Admin!'):alert('Good evening, dear Admin!')
		} else if (password===null || password==='') {
			alert('Canceled.') 
		} else if (password.length>0 && password!=='RootPass') {
			alert('Wrong password')
		}
} else if (userName===null || userName==='') {
	alert('Canceled.')
} else if (userName.length<4) {
	alert('I don\'t know any users having name length less than 4 symbols')
} else if (userName>=4 || userName!=='User' || userName!=='Admin') {
	alert('I don’t know you')
}