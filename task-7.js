var arr = [1,2,3,4];
var summa = 0;

for (element of arr) {
    if (element % 2 == 0) {
        summa += element;
    }
    
};
console.log(summa);