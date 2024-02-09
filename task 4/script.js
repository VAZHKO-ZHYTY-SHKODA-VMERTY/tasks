// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function s(a,b){
    if(typeof a!=="number" || typeof b!=="number"){
        console.log('Write numbers, please')
    }
    else{return a*b}
}
console.log(s('a',5))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function round(radius){
    if(typeof radius !=="number"){
        console.log('Write number, please')
    }
    else{return 3.14*radius*radius}
}
console.log(round(2))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
function a(arr){
    for(let i=0; i<=arr.length-1; i++){
        console.log(arr[i])
    }
}
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

a(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writer(text){
    document.write(`<p>${text}</p>`)
}
writer('bananas')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(el){
    document.write(`<ul>
                        <li>${el}</li>
                        <li>${el}</li>
                        <li>${el}</li>
                    </ul>`)
}
list('bananas')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. 
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list2(string, number){
    document.write(`<ul>`)
    for(let i=0; i<=number-1; i++){
        document.write(`<li>${string}</li>`)
    }
    document.write(`</ul>`)
}
list2('bananas', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listOfArray(arr){
    document.write(`<ul>`)
    for(let i=0; i<=arr.length-1; i++){
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)
}
let arr2=[1,5,7, '1','5','7', true, true, false, 'br']
listOfArray(arr2)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. 
// Для кожного об'єкту окремий блок.
function objWriter(arrOfObj){
    for(element of arrOfObj){
        document.write('<div>')
        for(key in element){
            document.write(`<p>${key} ${element[key]}</p>`)
        }
        document.write('</div>')
    }
}
objWriter(users)

// - створити функцію яка повертає найменьше число з масиву
function smallest(arr){
    let smallest=arr[0]
    for(let i=1; i<=arr.length-1; i++){
        if(arr[i]<smallest){
            smallest=arr[i]
        }
    }
    return smallest
}
let arr3=[5,7,9,2,16,-5,0,7]
console.log(smallest(arr3))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. 
// Приклад sum([1,2,10]) //->13
function sum(arr){
    let sum=0
    for(arg of arr){
        sum+=arg
    }
    return sum    
}
console.log(sum([1,2,10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2){
    swap=arr[index1]
    arr[index1]=arr[index2]
    arr[index2]=swap
    console.log(arr)
}
swap(arr3, 0, 4)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency){
    for(element of currencyValues){
        for(currency in element){
            if(exchangeCurrency===element[currency]){
                for(value in element){
                    if(typeof element[value]=="number"){
                        return sumUAH/element[value]
                    }
                }
            }
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))

