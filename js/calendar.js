document.addEventListener('DOMContentLoaded',function () {
    const dayholder= document.getElementById('days');
    const header = document.getElementById('header');

const months=[
"January","February","March","April","May","June","July",
"August","September", "October","November","December"
]

let current= new Date();
let today= new Date();
function calendar(date){
    const month= date.getMonth();
    const year= date.getFullYear();
    const firstDay= new Date(year,month,1).getDay();
    const lastDay= new Date(year,month+1,0).getDate();
    header.textContent=`${months[month]} ${year}`;
    dayholder.innerHTML='';
    for(let i=1;i<=lastDay;i++){
        const day= document.createElement('div');
        day.textContent= i;
        if(i===today.getDate() && month===today.getMonth() && year===today.getFullYear()) {
            day.classList.add('today');
        }
        dayholder.appendChild(day);
    }
}
calendar(current);
});