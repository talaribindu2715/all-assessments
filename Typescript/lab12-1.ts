enum Direction{
    Up,
    Down,
    Left,
    Right
}
enum Status{
    pending="PENDING",
    success="SUCCESS",
    failed="FAILED"
}
function printStatusOrDirection(value:Direction|Status):void{
    console.log("Value:",value);
}
let dir:Direction=Direction.Left;
let stat:Status=Status.success;
printStatusOrDirection(dir);
printStatusOrDirection(stat);