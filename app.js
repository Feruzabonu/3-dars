alert("WELCOME TO DATE INFORMATIONS");

function Time(hour){
    let a='';
  if(hour>=12 && hour<=23){
    switch(hour){
        case 12:
            a='12 PM'; break;
        case 13:
            a='1 PM'; break;
        case 14:
            a='2 PM'; break;
        case 15:
            a='3 PM'; break;
        case 16:
            a='4 PM'; break;
        case 17:
            a='5 PM'; break;
        case 18:
            a='6 PM'; break;
        case 19:
            a='7 PM'; break;
        case 20:
            a='8 PM'; break;
        case 21:
            a='9 PM'; break;
        case 22:
            a='10 PM'; break;
        case 23:
            a='11 PM'; break;
    }
  }else{
   a=`${hour} AM`;
  }
  return a;
}

let Months = [
    "January","February","March","April","May","June","July","Avgust","September","October","November","December"
]
let WeekDays = [
    "Sanday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
]

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let weekDay = date.getDay();
let hour = date.getHours();
let minut = date.getMinutes();
let second = date.getSeconds();
alert(`This year is: ${year}\nThis month is: ${Months[month]}\nToday is: ${day}\nThis week day is: ${WeekDays[weekDay]}\nCurrent time is: ${Time(hour)} : ${minut} : ${second}`);

