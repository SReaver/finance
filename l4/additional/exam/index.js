function getFriendlyNumbers(start, end) {
    function isInteger(num) {
        return (num ^ 0) === num;
    }
    if (start > end || start < 0 || end < 0 || isNaN(start) || isNaN(end) || isInteger(start) || isInteger(end) || start == null || end == null) {
        return false;
    } else {
        //функция определяющая дружественные числа

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

    }
}

module.exports = {
    firstName: 'Sergey',
    secondName: 'Plotnikov',
    task: getFriendlyNumbers
}