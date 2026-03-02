function greetUsers(name:string,title:string="mr./ms."):string{
    return "Hello,"+ title +" "+ name + "!";
}
console.log(greetUser("Raju"));
console.log(greetUser("Raju","Dr."));