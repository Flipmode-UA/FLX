function userCard(index) {
	let balance = 100;
	let transactionLimit = 100;
	let historyLogs = [];
	let key = index;
	const tax = 0.005;
	const roundingAccuracy = 2;
	return {
		getCardOptions() {
		return {balance, transactionLimit, historyLogs, key};
		},
		putCredits(amount) {
			balance += amount;
			historyLogs.push({operationType: 'Received Credits',
				cedits: amount,
				operationTime: new Date().toLocaleString('en-GB')});
		},
		takeCredits(amount) {
			if (balance>=amount && transactionLimit>=amount) {
				balance -= amount;
				historyLogs.push({operationType: 'Withdrawal of Credits',
				cedits: amount,
				operationTime: new Date().toLocaleString('en-GB')});
			} else {
				console.error('The operation can not be done!');
			}
		},
		setTransactionLimit(amount) {
			transactionLimit = amount;
			historyLogs.push({operationType: 'Transaction limit change',
				cedits: amount,
				operationTime: new Date().toLocaleString('en-GB')});
		},
		transferCredits(amount, cardObject) {
			let amountWithTax = (amount + amount * tax).toFixed(roundingAccuracy);
			if (this.transactionLimit>=amountWithTax && balance>=amountWithTax) {
				cardObject.putCredits(amountWithTax)
			} else {
				console.error('This operation cannot be done!');
			}
		}	
	};
}
class UserAccount {
	constructor(name) {
		this.name = name;
		this.cards = [];
		this.maxCardsNumber = 3;
	}
	addCard() {
		if (this.cards.length < this.maxCardsNumber) {
			this.cards.push(userCard(this.cards.length + 1))
		}
	}
	getCardByKey(index) {
		return this.cards[index-1];
	}
}