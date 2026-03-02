type point={
    x:number;
    y:number;
};
function printpoint(pt:point):void{
    console.log("X coordinate:",pt.x);
    console.log("Y coordinate:",pt.y);
}
printpoint({x:100,y:200});