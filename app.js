// =======================================
// Simple Student Manager
// Weakly Task 1
// =======================================

// مصفوفة تخزن الطلاب (كل طالب هو Object)
let students = [];

// متغير بسيط حتى نزود الـ id لكل طالب جديد
// كل طالب عندة id مختلف عن باقي الطلاب 
let nextId = 1;

// ---------------------------------------
// TODO 1:
// دالة تنشئ طالب جديد وتُرجع Object
// الاتربيوت: name, age
// الدرجات بالبداية مصفوفة فارغة []
// id يأخذ القيمة من nextId، وبعدها نزود nextId
// مثال شكل الطالب:
// {
//   id: 1,
//   name: "Ali",
//   age: 20,
//   grades: []
// }
// ---------------------------------------
function createStudent(name, age) {
    let id = nextId;
    nextId++;
    const student = {
        id: id,
        name: name,
        age: age,
        grades: []
    };
   
    return student;
}
// let s1 =createStudent("Ali", 20);
// let s2 =createStudent("ahmed", 22);
// let s3 =createStudent("mustafa", 19);
// let s4 = (createStudent("haifa", 21));




// ---------------------------------------
// TODO 2:
// دالة تضيف طالب إلى مصفوفة students
// ---------------------------------------
function addStudent(student) {
    students.push(student);
    return students;
    
}
// addStudent(s1);
// addStudent(s2);
// addStudent(s3);
// addStudent(s4);





// ---------------------------------------
// TODO 3:
// دالة تضيف درجة جديدة لطالب معيّن
// تضيف الدرجة إلى student.grades
// ---------------------------------------
function addGrade(student, grade) {
    return student.grades.push(grade);
}
// addGrade(s1, 80);
// addGrade(s1, 44)
// addGrade(s1, 70)
// addGrade(s1, 33)




// ---------------------------------------
// TODO 4:
// دالة تحسب معدّل درجات طالب
// إذا ما عنده درجات ترجع 0
// تستخدم loop حتى تجمع الدرجات
// وترجع sum / عدد الدرجات
// ---------------------------------------
function getAverage(student) {
    let sum = 0;
    for ( let i = 0; i< student.grades.length; i++) {
        sum += student.grades[i];
        
}
if (student.grades.length === 0) {
    return 0;
}    else {
     return sum / student.grades.length;
}   
}




// ---------------------------------------
// TODO 5:
// دالة ترجع حالة الطالب حسب المعدّل
// تستخدم getAverage(student)
// إذا المعدّل >= 50 → "ناجح"
// غير ذلك → "راسب"
// ---------------------------------------
function getStatus(student) {
    if (getAverage(student) >= 50) {
        return "ناجح";
    } else {
        return "راسب";
    }
}





// ---------------------------------------
// TODO 6:
// دالة تطبع تقرير طالب واحد في الـ console
// مثال شكل الطباعة:
// ========================================
// Student #1 - Ali (Age: 20)
// Grades: 80, 90, 75
// Average: 81.67
// Status: ناجح
// إذا ماكو درجات تطبع: Grades: لا توجد درجات بعد
// ---------------------------------------
function printStudentReport(student) {
    console.log("student:#" + student.id + " - " + student.name + " (Age: " + student.age + ")");
    
    const avg = getAverage(student);
    console.log("Average: " + avg);

    if (student.grades.length === 0) {
        return "Grades: لا توجد درجات بعد";
    } else if (avg >= 50) {
        console.log( "Status: ناجح");
    } else {
        console.log( "Status: راسب")
    }
}

    






// ---------------------------------------
// TODO 7:
// دالة تطبع تقرير كل الطلاب
// إذا ماكو طلاب تطبع رسالة مناسبة
// غير ذلك تستخدم loop على students
// وتستدعي printStudentReport لكل طالب
// ---------------------------------------
function printAllStudents() {
    if (students.length === 0) {
        return "لا يوجد طلاب حاليا";
    } else {
        for (let i =0; i<students.length; i++) {
            printStudentReport(students[i]);
        }
    
}
}





// ---------------------------------------
// TODO 8:
// دالة تبحث عن طالب بالاسم داخل students
// إذا لقت الطالب ترجع الـ object
// إذا ما لقت ترجع undefined
// ---------------------------------------
function findStudentByName(name) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === name) {
            return students[i];
        }
    }
    return undefined; 
}

    







// =======================================
// TODO 9 - جزء التنفيذ (Main):
// هنا يخلي الطالب كوده التجريبي:
// - ينشئ 3 طلاب على الأقل باستخدام createStudent
// - يضيفهم لمصفوفة students باستخدام addStudent
// - يضيف درجات لكل طالب باستخدام addGrade
// - يستدعي printAllStudents حتى يطبع تقرير كامل
//
// مثال تخطيط (هم يملوه):
//
// const s1 = createStudent("Ali", 20);
// const s2 = createStudent("Sara", 22);
// const s3 = createStudent("Noor", 19);
//
// addStudent(s1);
// addStudent(s2);
// addStudent(s3);
//
// addGrade(s1, 80);
// addGrade(s1, 90);
// addGrade(s1, 75);
//
// ... الخ
//
// printAllStudents();
//
// =======================================
// const s1 = createStudent("Ali", 20);
// const s2 = createStudent("Sara", 22);
// const s3 = createStudent("Noor", 19);
// console.log("========================↑↑↑↑Function bulding ↑↑↑↑↑↑↑↑=============================");
// console.log("========================↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑=============================");
// console.log("====================main app using finction====================");
// let student1 = createStudent("Ali", 20);
// let student2 = createStudent("Sara", 22);
// let student3 = createStudent("Noor", 19);
// addStudent(student1);
// addStudent(student2);
// addStudent(student3);

// addGrade(student1, 80);
// addGrade(student1, 90);
// addGrade(student1, 75); 

// addGrade(student2, 60);
// addGrade(student2, 70);     
// addGrade(student2, 80);

// addGrade(student3, 40);
// addGrade(student3, 50);
// addGrade(student3, 30);

// printAllStudents();

// console.log("=================================findStudentByName sara====================");


// console.log(findStudentByName("Sara"));

// console.log("=================================printStudentReport student1====================");

// printStudentReport(student1);


module.exports = {
    students,
    createStudent,
    addStudent,
    addGrade,
    getAverage,
    getStatus,
    printStudentReport,
    printAllStudents,
    findStudentByName
}

