function Calucalter(a, b, operator){
    switch(operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a/b : 'error: division by zero';
        }

    }    

console.log(Calucalter(10, 0, '/')); // 15