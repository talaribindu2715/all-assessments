interface StudentList{
    name:string;
    marks:number;
}
const students:StudentList[]=[
    {name:"Bindu",marks:95},
    {name:"pooji",marks:90},
    {name:"Chinnu",marks:85},
    {name:"Gowtham",marks:85}
];
students.forEach(student=>{
    console.log(student.name,student.marks);
});