type PointType={
    x:number;
    y:number;
};
interface PointInterface{
    x:number;
    y:number;
}
function printPoint(point:PointType|PointInterface):void{
    console.log("X:",point.x);
    console.log("Y:",point.y);
}
printPoint({x: 50,y: 30});