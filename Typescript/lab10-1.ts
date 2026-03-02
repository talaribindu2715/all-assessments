interface User{
    readonly id:number;
    name:string;
    age?:number;
}
let user:User={
    id:4,
    name:"Pooji",
    age:20
};
console.log(user.id);
console.log(user.name);
console.log(user.age);