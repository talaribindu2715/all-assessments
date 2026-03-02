type Operation=(a:number,b:number)=>number;
const add:Operation=(a,b)=>{
    return a+b;
}
const multiply:Operation=(a,b)=>{
    return a*b;
}
console.log("Addition:",add(5,3));
console.log("Multiplication:",multiply(5,3));