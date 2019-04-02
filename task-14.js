var n=1000, num = 0;
do {
    n /=2;
    num++;
} while (n >= 50);
console.log('Получиться число: ' + n);
console.log('Количество итераций: ' +num);