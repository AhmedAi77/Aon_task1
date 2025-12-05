// JavaScript Practice Questions
// ==============================
// كل سؤال مكتوب كتعليق، و خاّنّا مكان فارغ تكتب بيه الحل مالك :)

// 1) عرّف متغيرين a و b وخلي بيهم أرقام،
//    واكتب كود يطبع مجموعهم.
//    مثال متوقع للطباعة: Sum: 30

// --- حل السؤال 1 هنا ---
console.log("==============1================");


let a= 10;
let b= 20;
console.log(a+b);


// 2) عندك متغير minutes.
//    حوّله إلى ثواني (seconds) واطبع الناتج.
//    مثال: إذا minutes = 5 الناتج = 300

// --- حل السؤال 2 هنا ---
//
console.log("=============2=================");

 function MinutesConvert(minutes){
return minutes * 60

}
let answer2= MinutesConvert(5)
console.log(answer2);

console.log("============3==================");








// 3) اكتب دالة باسم square
//    تستقبل رقم وترجع مربع الرقم.
//    مثل: square(4) ترجع 16

// --- حل السؤال 3 هنا ---

function square(Number){
    return Number * Number
}
let answer3 = square(4)
console.log(answer3);


// 4) اكتب دالة باسم maxOfTwo
//    ترجع أكبر رقم من رقمين باستخدام if.
//    مثل: maxOfTwo(8, 3) ترجع 8

// --- حل السؤال 4 هنا ---

console.log("==============4================");

function maxOfTwo(a,b){
    if (a > b ) {
        return a

    }
    

    else {
        return b

    }
    
}
let answer4 = maxOfTwo(3,8)
console.log(answer4);


// 5) اكتب دالة باسم helloName
//    تستقبل اسم وترجع نص: "Hello " مع الاسم.
//    مثل: helloName("Ali") ترجع "Hello Ali"

// --- حل السؤال 5 هنا ---

console.log("==============5================");

function HelloName(name) {

    return "hello " + name

    
}
let answer5 = HelloName("Ali")
console.log(answer5);



// 6) عندك متغير num 
//    اكتب كود يحدد إذا الرقم زوجي أو فردي.
//    إذا زوجي اطبع "Even" إذا فردي اطبع "Odd"

// --- حل السؤال 6 هنا ---

console.log("==============6================");

function OdeOrEven (num){
    if (num % 2 === 0)
    return "Even"


    else {
        return " Odd"
    }
}
let answer6 =OdeOrEven(6)
console.log(answer6);



// 7) عندك متغير grade (0 – 100).
//    إذا الدرجة >= 50 اطبع "ناجح"
//    غير ذلك اطبع "راسب"

// --- حل السؤال 7 هنا ---
console.log("=============7=================");

function PassOrFail (grade){

    if (grade  <= 50)
    {
        return "حجان";
    
    } 
       else  {
        return "بسار"
    }
    
    
}
let answer7 = PassOrFail(49)
console.log(answer7);


// 8) عندك متغير score.
//    اكتب شروط if / else if حتى تطبع:
//    90 فما فوق  → "ممتاز"
//    75 – 89     → "جيد جدًا"
//    60 – 74     → "جيد"
//    أقل من 60   → "ضعيف"

// --- حل السؤال 8 هنا ---
console.log("============8==================");

function GradeScore (score){

    if (score > 100 || score < 0){
         return "invalid number must be btween 0-100"
    }
 
     else if (score >= 90 && score <=100){
         return "exlent"
     }
 
      else if (score >= 75 && score <=89){
         return "very good"
     }
     else  if (score >= 60 && score <=74){
         return "good"
     }
    else if (score <= 60 ){
         return "weak"
     }
     else if (score > 100 || score < 0){
         return "invalid number must be btween 0-100"
     }
 }
 let answer8 =GradeScore(101)
 console.log(answer8);




// 9) اكتب لوب for يطبع الأرقام من 1 إلى 10
//    كل رقم بسطر واحد باستخدام console.log

// --- حل السؤال 9 هنا ---

console.log("===========9===================");

for (let blackfriday =1; blackfriday <=10;blackfriday++){
    console.log(blackfriday);
    }




// 10) اكتب لوب يحسب مجموع الأرقام من 1 إلى 100
//     خزّن الناتج في متغير total واطبعه بالنهاية

// --- حل السؤال 10 هنا ---
console.log("=============10=================");
let total = 0;


for (let ahmed =1; ahmed <=100;ahmed++){
    total += ahmed;}
    console.log(total);



// 11) عندك النص التالي:
//     let text = "hello world";
//     اكتب لوب يحسب كم مرة يتكرر الحرف 'l'
//     وخزّن العدد في متغير count ثم اطبعه

// --- حل السؤال 11 هنا ---

console.log("==============11================");


let text = "hello world"
count=0
for(i in text){
    if (text[i]==="l"){
        count++;
    }
}  
        console.log(count);
    




// 12) اكتب دالة باسم countEven(n)
//     ترجع عدد الأرقام الزوجية من 1 إلى n.
//     مثال: countEven(10) ترجع 5 (2,4,6,8,10)

// --- حل السؤال 12 هنا ---
console.log("===============12===============");


function countEven(n){
    let even = 0
    for (let i = 1; i <= n; i++){
        if (i%2===0){
            even++;
        }

    }
    console.log(even);

 }
    
let answer12 =countEven(10)






// 13) اكتب دالة باسم sumOdd(n)
//     ترجع مجموع الأرقام الفردية من 1 إلى n.
//     مثال: sumOdd(5) ترجع 9 (1 + 3 + 5)

// --- حل السؤال 13 هنا ---
console.log("=============13=================");


function sumOdd (n){
  let odd=0
   for (let i = 1;i<=n;i++){
    if (i % 2 !== 0){
        odd++;

    }
   }
   return odd
}
let answer13= sumOdd(5)
console.log(answer13)





// 14) اكتب دالة باسم factorial(n)
//     تحسب حاصل ضرب الأرقام من 1 إلى n.
//     مثال: factorial(5) = 1*2*3*4*5 = 120

// --- حل السؤال 14 هنا ---
console.log("=============14=================");


function factorial(n){
    let factor = 1;
    for (let i = 1; i<= n;i++){
        factor *= i;
    }
    return factor
}
let answer14=factorial(5
)
console.log(answer14);


