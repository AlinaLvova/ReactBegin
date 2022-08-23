'use strict'

// //---------------------------------------------------------------

// let str = `Старший братец ПОНЕДЕЛЬНИК –
// работяга, не бездельник.
// Он неделю открывает
// всех трудиться зазывает.

// ВТОРНИК следует за братом
// у него идей богато.

// А потом СРЕДА-сестрица,
// не пристало ей лениться.

// Брат ЧЕТВЕРГ и так, и сяк,
// он мечтательный чудак.

// ПЯТНИЦА-сестра сумела
// побыстрей закончить дело.

// Предпоследний брат СУББОТА
// не выходит на работу.

// В гости ходит ВОСКРЕСЕНЬЕ,
// очень любит угощенье
// `;

// function changeWeekNames(st){
//     st=st.replace(/ПОНЕДЕЛЬНИК/g, "MONDAY");
//     st=st.replace(/ВТОРНИК/g,"TUESDAY");
//     st=st.replace(/СРЕДА/g,"WEDNESDAY");
//     st=st.replace(/ЧЕТВЕРГ/g,"THURSDAY");
//     st=st.replace(/ПЯТНИЦА/g,"FRIDAY");
//     st=st.replace(/СУББОТА/g,"SATURDAY");
//     st=st.replace(/СУББОТА/g,"SUNDAY");
//     return st;
// }

// let newstr = changeWeekNames(str);
// console.log(newstr);



function calcMatchingNumbersInRightPlace(item,index){
    if (item===userNumber[index]){
        numOfMatchesInRight+=1;
        userNumber[index]='*';
    }
}

function calcMatchingNumbersInWrongPlace(item,index){
    for (let j=0; j<copySecretNumber.length; j++){
        if (item === copySecretNumber[j]){
            numOfMatchesInWrong+=1;
            copySecretNumber[j]='#';
            break;
        }
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

let lengthNumber=randomIntFromInterval(3,6);
let secretNumber = Array.from({length: lengthNumber}, () => Math.floor(Math.random() * 9));
let copySecretNumber=0; 
//для обрабоки случаев из повторяющихся цифр. По условию об этом ничего не сказано, упомянуто лишь, что различаются, но это не отменяет повторяющиеся цифры. 
//При наличии совпадения, дабы не путать с другими сравниваемыми цифрами - такие совпадающиеся одныжды цифры будем временно помечать в массиве.


let userNumber = 0;

let numOfMatchesInRight = 0;
let numOfMatchesInWrong = 0;
let result = false;

while(!result)
{
const answer = prompt("Какое загадано число?","");
    if (answer === null) {
        break;
    }
    userNumber=(""+answer).split("").map(Number);
    if (userNumber.length>6 || userNumber.length<3){
        alert('Число должно быть в диапазоне от 99 до 1000000. Введите новое.','');
        continue;
    }
    numOfMatchesInRight=0;
    numOfMatchesInWrong=0;
    copySecretNumber=JSON.parse(JSON.stringify(secretNumber)); 
    copySecretNumber.forEach((item, index) => {calcMatchingNumbersInRightPlace(item, index)});
    userNumber.forEach((item,index)=>{if (!isNaN(item)) {calcMatchingNumbersInWrongPlace(item,index)}});
    if(numOfMatchesInRight===lengthNumber && userNumber.length===lengthNumber){
        result=true;
        alert(`Число разгадано! Это число ${answer}.`);
    }else{
        alert(`Количество совпавших цифр не на своих местах - ${numOfMatchesInWrong}, цифр на своих местах - ${numOfMatchesInRight}`);
    }
}