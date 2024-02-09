// // - Знайти та вивести довижину настипних стрінгових значень
// //     'hello world', 'lorem ipsum', 'javascript is cool'
// let str1='hello world'
// console.log(str1.length)

// let str2 = 'lorem ipsum'
// console.log(str2.length)

// let str3='javascript is cool'
// console.log(str3.length)

// // - Перевести до великого регістру наступні стрінгові значення
// //       'hello world', 'lorem ipsum', 'javascript is cool'
// let str4big = str1.toUpperCase()
// console.log(str4big)

// let str5 = str2.toUpperCase()
// console.log(str5)

// let str6 = str3.toUpperCase()
// console.log(str6)

// // - Перевести до нижнього регістру настипні стрінгові значення
// //       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str7 = str4big.toLowerCase()
// console.log(str7)

// let str8 = str5.toLowerCase()
// console.log(str8)

// let str9 = str6.toLowerCase()
// console.log(str9)

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str10 = ' dirty string   '
// console.log(str10.trimRight().trimLeft())

// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str11 = 'Ревуть воли як ясла повні';
// const stringToArray = ()=> {
//     return str11.split([' '])
// }
// console.log(stringToArray())
// // ['Ревуть', 'воли', 'як', 'ясла', 'повні']


// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let arr1=[10,8,-7,55,987,-1011,0,1050,0]
// let arr2=arr1.map(element=>{
//     let newElement=element.toString()
//     return newElement
// })
// console.log(arr2)

// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, 
// // або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// function sortNums(arr,direction){
//     if(direction==='ascending'){
//         arr.sort((a,b)=>a-b)
//     }
//     if(direction==='descending'){
//         arr.sort((a,b)=>b-a)
//     }
// }
// let nums2=sortNums(nums,'ascending') // [3,11,21]
// // console.log(nums2)
// let nums3=nums.sort((a,b)=> a-b)
// console.log(nums3)
// // console.log(sortNums(nums,'descending')) // [21,11,3]

// // ==========================
// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// //  -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray2=coursesAndDurationArray.sort((a,b) => b.monthDuration-a.monthDuration)
// console.log(coursesAndDurationArray2)

// //  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray3=coursesAndDurationArray.filter(duration=>duration.monthDuration>5)
// console.log(coursesAndDurationArray3)

// //  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let coursesAndDurationArray4 = coursesAndDurationArray.map(value =>{
//     let newCourses=value
//     newCourses.id=Number
//     return newCourses
// })
// console.log(coursesAndDurationArray4)

// //  =========================
// //  описати колоду карт (від 6 до туза без джокерів)
// //  - знайти піковий туз
// for(card of cards){
//     for(key in card){
//         if(card.value==='T'&& card.suit==='spade'){console.log(card)}
//     }
// }

//  - всі шістки


//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше

// {
    //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    //     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    //     color:'', // 'red','black'
    // }
    
    // =========================
    
    // Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
    let cards =[{value:'6', suit:'spade'},{value:'7', suit:'spade'},
                {value:'8', suit:'spade'},{value:'9', suit:'spade'},
                {value:'10', suit:'spade'},{value:'J', suit:'spade'},
                {value:'D', suit:'spade'},{value:'K', suit:'spade'},
                {value:'T', suit:'spade'},{value:'6', suit:'diamond'},
                {value:'7', suit:'diamond'},{value:'8', suit:'diamond'},
                {value:'9', suit:'diamond'},{value:'10', suit:'diamond'},
                {value:'J', suit:'diamond'},{value:'D', suit:'diamond'},
                {value:'K', suit:'diamond'},{value:'T', suit:'diamond'},
                {value:'6', suit:'heart'},{value:'7', suit:'heart'},
                {value:'8', suit:'heart'},{value:'9', suit:'heart'},
                {value:'10', suit:'heart'},{value:'J', suit:'heart'},
                {value:'D', suit:'heart'},{value:'K', suit:'heart'},
                {value:'T', suit:'heart'},{value:'6', suit:'clubs'},
                {value:'7', suit:'clubs'},{value:'8', suit:'clubs'},
                {value:'9', suit:'clubs'},{value:'10', suit:'clubs'},
                {value:'J', suit:'clubs'},{value:'D', suit:'clubs'},
                {value:'K', suit:'clubs'},{value:'T', suit:'clubs'}]
    // {
        //     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let sortedCards = cards.reduce((sortedCards, card)=>{
    if(card.suit=='spade'){sortedCards.spades.push(card)}
    else if(card.suit=='diamond'){sortedCards.diamonds.push(card)}
    else if(card.suit=='heart'){sortedCards.hearts.push(card)}
    else if(card.suit=='clubs'){sortedCards.clubs.push(card)}
    return sortedCards
},{spades:[],diamonds:[],hearts:[],clubs:[]} )
console.log(sortedCards) 

// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker