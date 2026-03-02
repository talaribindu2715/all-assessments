interface Calculator{
    add(a:number,b:number):number;
    multiply(a:number,b:number):number;
}
const calc:Calculator={
    add(a,b){
        return a+b;
    },
    multiply(a,b){
        return a*b;
    }
};
console.log(calc.add(12,30));
console.log(calc.multiply(15,9));