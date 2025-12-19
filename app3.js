// تاسك الأسبوع الثالث
// اختار واحد فقط:
// /users
// /posts
// /todos 
// من: https://jsonplaceholder.typicode.com/

// المطلوب
// 1 جلب البيانات
// استخدم fetch
// خزن الداتا داخل متغير
// اطبع الداتا بالـ console حتى تتأكد الداتة عندك موجودة صح 

// 2 نفذ الفنكشنات ال10
// جميع الفنكشنات لازم:
// تستقبل الداتا كـ parameter
// ترجع (return) نتيجة
//  الفنكشنات المطلوبة (10):
// 1 getAllItems(data) 
// ترجع كل الداتا بدون تعديل
// 2 getItemById(data, id) 
// ترجع عنصر واحد حسب id
// 3 getItemsCount(data) 
//  ترجع عدد العناصر
// 4 getMappedValues(data) 
//  ترجع مصفوفة جديدة بقيمة وحدة من كل عنصر (مثل: name / title)
// 5 getFilteredItems(data) 
//  ترجع العناصر بعد تطبيق شرط (مثل: completed === true)
// 6 hasAnyMatchingItem(data) 
//  ترجع true إذا يوجد عنصر يحقق شرط
// 7 areAllItemsMatching(data) 
//  ترجع true إذا كل العناصر تحقق شرط
// 8 getSortedItems(data) 
//  ترجع الداتا مرتبة (تصاعدي أو تنازلي)
// 9 getReducedValue(data) 
//  ترجع قيمة محسوبة باستخدام reduce (مثل: عدد العناصر المكتملة)
// 10 getModifiedItems(data) 
//  ترجع داتا جديدة بعد تعديل قيمة معينة (بدون التعديل على الأصل)


// تسليم الحل يكون على GitHub ب branch جديد غير ال main و تسوون pull request في حال الحل صحيح اني راح اوافق على حلك في حال اكو تعديلات راح اتركلك الاخطاء اللي عندك حتى تحلهن


//1
async function getAllItems() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    return data;
}
    catch (error) {
        console.log('there is an error:', error);
    }
}
// getAllItems();

//2
getItemById = (data, id) => {
    return data.find(item => item.id === id);
    
}

//3
getItemsCount = (data) => {
    return data.length;
}

//4
const getMappedValues = (data) => {
  return data.map(item => [item.name, item.email]);
};



//5
const getFilteredItems = (data, id) => {
  const item = data.find(item => item.id === id);
  return item ? [item] : [  ];
}
    
//6
const hasAnyMatchingItem = (data) => {
    return data.some(item => item.id > 5);
}

//7
const areAllItemsMatching = (data) => {
    return data.every(item => item.id > 0);
}

//8
const getSortedItems = (data) => {
    return data.slice().sort((a, b) => a.name.localeCompare(b.name));
}

//9
const getReducedValue = (data) => {
    return data.reduce((count, item) => {
        if (item.id % 2 === 0) {
            return count + 1;
        }
        return count;
    }, 0);
}

//10
const getModifiedItems = (data) => {
    return data.map(item => ({
        ...item,
        isActive: item.id % 2 === 0
    }));
}



async function test() {
    
        const data = await getAllItems();
        console.log(getAllItems(data));
        console.log(getItemById(data, 3));
        console.log(getItemsCount(data));
        console.log(getMappedValues(data));
        console.log(getFilteredItems(data, 11));
        console.log(hasAnyMatchingItem(data));
        console.log(areAllItemsMatching(data));
        console.log(getSortedItems(data));
        console.log(getReducedValue(data));
       console.log(getModifiedItems(data));
    }

    test();   
