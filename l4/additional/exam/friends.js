function getFriendlyNumbers(start, end) {

	if (start > end || start < 0 || end < 0 || isNaN(start) || isNaN(end) || start == null || end == null) {
		return false;
	} else {
		//функция определяющая дружественные числа
		let friends = [];
		let dd = [];
		for (let i = start; i < end; i++) {
			for (let j = start; j < end; j++) {
				if (i == j) {
					continue;
				}
				if ((getSum(getDevisors(j)) == i && getSum(getDevisors(i)) == j)) {
					if (dd.indexOf(i) == -1) {
						dd.push(j);
						friends.push([i, j]);
					}
				}
			}
		}

		//функция определяющая делители
		function getDevisors(num) {
			let arr = [];
			for (let i = 1; i < num; i++) {
				if (num % i == 0) {
					arr.push(i);
				}
			}
			return arr;
		}

		//фукция возвращающая сумму из предоставленного массива
		function getSum(arr) {
			let sum = 0;
			arr.forEach(function (item) {
				sum = sum + item;
			});
			return sum;
			//console.log(sum);
		}

		console.log(friends);
	}
}
getFriendlyNumbers(1, 300);