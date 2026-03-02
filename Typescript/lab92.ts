function formatValue(value:string|number):void{
    if(typeof value==="string"){
        console.log(value.toUpperCase());
    }
    else{
        console.log(Math.round(value));
    }
}
formatValue("typescript");
formatValue(50.68);