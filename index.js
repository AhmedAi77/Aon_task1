let app = require('./student.js');
let app2 = require('./Teachers.js');

//from student.js exports.   
const {
  createStudent,
  addStudent,
  addGrade,
  printAllStudents
} = app;

//from Teachers.js exports.
const {
  createTeacher,
  addTeacher,
  assignStudentToTeacher,
  printAllTeachers
} = app2;

let s1 =createStudent("Ali", 20);
let s2 =createStudent("Sara", 22);
let s3 =createStudent("Omar", 19);

addStudent(s1);
addStudent(s2);
addStudent(s3);


let t1 =createTeacher("Mr. Ahmed", "Math");
addTeacher(t1);

assignStudentToTeacher(t1, s1);
assignStudentToTeacher(t1, s2);
app2.printTeacherReport(t1);
console.log(app2.teachers);



