let app = require('./app.js');

let s1 = app.createStudent("ali",22);
app.addStudent(s1);

let s2 = app.createStudent("sara",23);
app.addStudent(s2);

let s3 = app.createStudent("noor",24);
app.addStudent(s3);

app.addGrade(s1,80);
app.addGrade(s1,90);
app.addGrade(s1,70);

app.addGrade(s2,60);
app.addGrade(s2,70);
app.addGrade(s2,80);

app.addGrade(s3,50);
app.addGrade(s3,60);
app.addGrade(s3,70);

app.printAllStudents();



