let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`;

function changeWeekNames(st){
    st=st.replace(/ПОНЕДЕЛЬНИК/g, "MONDAY");
    st=st.replace(/ВТОРНИК/g,"TUESDAY");
    st=st.replace(/СРЕДА/g,"WEDNESDAY");
    st=st.replace(/ЧЕТВЕРГ/g,"THURSDAY");
    st=st.replace(/ПЯТНИЦА/g,"FRIDAY");
    st=st.replace(/СУББОТА/g,"SATURDAY");
    st=st.replace(/СУББОТА/g,"SUNDAY");
    return st;
}

let newstr = changeWeekNames(str);
console.log(newstr);