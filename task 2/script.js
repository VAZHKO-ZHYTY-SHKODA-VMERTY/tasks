// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr 
arr=[5, 0.3, 'chipi', 'chipi', 'chapa', 'chapa', 'ruvi', 'ruvi', 'rava', 'rava']
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1={
//     title: 'Pet Sematary',
//     pageCount: 350,
//     genre: 'horror'
// }

// let book2={
//     title: 'All for the game: The Raven King',
//     pageCount: 398,
//     genre: 'sports fiction'
// }

// let book3={
//     title:'The Witcher: Blood of Elves',
//     pageCount:440,
//     genre:'fiction'
// }

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. 
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1={
    title: 'Pet Sematary',
    pageCount: 350,
    genre: 'horror',
    authors:[{name:'Stephen King', age:76}]
}

let book2={
    title: 'All for the game: The Raven King',
    pageCount: 398,
    genre: 'sports fiction',
    authors:[{name:'Nora Sakavic', age:'??'}]
}

let book3={
    title:'The Witcher: Blood of Elves',
    pageCount:440,
    genre:'fiction',
    authors:[{name:'Andrzhej Sapkowski', age:75}]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. 
// Вивести в консоль пароль кожного користувача
let users=[
    {
        name:'Vanya',
        username:'vanka.vstanka2010',
        password:'1bimbimbambam1'
    },
    {
        name:'Olya',
        username:'_your_kitty_',
        password:'meow123meow'
    },
    {
        name:'Masha',
        username:'mp9weff',
        password:'lichne ne publichne hahaha'
    },
    {
        name:'Victor',
        username:'vctr.cvlnk',
        password:'20495vfjeb wj'
    },
    {
        name:'Anton',
        username:'_antoshka_',
        password:'2014@nanana'
    },
    {
        name:'Oleksandr',
        username:'rider',
        password:'Ghthkl!vnk15'
    },
    {
        name:'Kateryna',
        username:'miss_katrin',
        password:'rsmhysmh'
    },
    {
        name:'Eren',
        username:'eren_yaeger',
        password:'freedom'
    },
    {
        name:'Yennefer',
        username:'yenna_vengenberg',
        password:'vpvmedolv[ewmo[m'
    },
    {
        name:'Olexiy',
        username:'alekseevich',
        password:'opvod[fcsoladmwk'
    },
]

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. 
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a=-3

if (a==0){
    console.log('Невірно')
}
else{
    console.log('Вірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. 
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time=10

if(time>=0 && time<=15){
    console.log('Зараз перша чверть години')
}
else if(time>15 && time<=30){
    console.log('Зараз друга чверть години')
}
else if(time>30 && time<=45){
    console.log('Зараз третя чверть години')
}
else if(time>45 && time<=59){
    console.log('Зараз четверта чверть години')
}
else{
    console.log('Неможливий час')
}
// - У змінній day дано якесь число від 1 до 31. 
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// - Скласти розклад на тиждень за домопоги switch. 
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let day
switch(day){
    case(1):
    console.log('Понеділок: ширяюсь а потім в зал')
    break;
    case(2):
    console.log('Вівторок: ну шось туда сюда і бізнес маю')
    break;
    case(3):
    console.log('Середа: купую бмв х6')
    break;
    case(4):
    console.log('Четвер: тягну три плотненькі баночки з Альоною і на волейбол')
    break;
    case(5):
    console.log('Пятниця: розкумар')
    break;
    case(6):
    console.log('Субота: можна і в Сарни вже їхати')
    break;
    case(7):
    console.log('Неділя: можна вже і з Сарн вертатись')
    break;
    default:
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let x=5 
let y=7
if(x>y){
    console.log(x)
}
else if(x<y){
    console.log(y)
}
else{
    console.log(x=y)
}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). 
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення 
// змінної х являється falsy (хибноподібні, тобто приводиться до false)


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. 
// За допомоги іф перевірити кожен його елемент на тривалість навчання. 
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".