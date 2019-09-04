var bills = [{value: 10000}, 
			 {value: 20000},
			 {value: 20000, fake: true},
			 {value: 500000}];

// Tinh tong tien, co the dung reduce or dung for
// function countMoney(arr) {
// 	var total = arr.reduce((s, item) => s+= item.value, 0);
// 	return total;
// }

function countMoney(arr) {
	var total = 0;
	for(var bill of bills) {
		if(!bill.fake) total += bill.value;
		else{
			console.log('Fake bill: ', bill);
			//break; (dung break de thoat khoi vong lap for, thoi ko dem tiep nua)
		}
	}
	return total;
}

console.log(countMoney(bills));