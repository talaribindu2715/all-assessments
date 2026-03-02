// enum Direction{
//     Up,
//     Down,
//     Left,
//     Right
// }
// enum Status{
//     pending="PENDING",
//     success="SUCCESS",
//     failed="FAILED"
// }
// function printStatusOrDirection(value:Direction|Status):void{
//     console.log("Value:",value);
// }
// let dir:Direction=Direction.Left;
// let stat:Status=Status.success;
// printStatusOrDirection(dir);
// printStatusOrDirection(stat);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Status;
(function (Status) {
    Status["pending"] = "PENDING";
    Status["success"] = "SUCCESS";
    Status["failed"] = "FAILED";
})(Status || (Status = {}));
function printStatusOrDirection(value) {
    console.log("Value:", value);
}
var dir = Direction.Left;
var stat = Status.success;
printStatusOrDirection(dir);
printStatusOrDirection(stat);
