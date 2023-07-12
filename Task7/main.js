
// Change Current month by this: date.setMonth(1);
// Change Current day by this: date.setDate(20);
// Shows Day is which day of week : date.getDay()
// const lastDayOfPreviousMonth = new Date(date.getFullYear(), date.getMonth(), 0);
const date = new Date();

const renderCalendar = () => {
    const monthDays= document.querySelector(".days");
    // Last Day Of Current Month as follows:
    const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    
    date.setDate(1);
    const firstDayIndex = date.getDay();
    const lastDayIndex= new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();
    
    const nextDays = 7 -lastDayIndex -1;
    
    const months =[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "Nowember",
        "December"
    ];
    console.log(date.getFullYear());
    document.querySelector(".date h1").innerHTML = months[date.getMonth()]+" "+date.getFullYear();
    document.querySelector(".date p").innerHTML= new Date().toDateString();
    
    
    
    let days ="";
    
    for(let x=firstDayIndex; x>0; x--){
        days += `<div class="prev-date"> ${prevLastDay - x +1} </div>`;
        
    }
    
    for(let i=1; i<=lastDay; i++){
        if(i=== new Date().getDate() && date.getMonth() === new Date().getMonth()){
        days += `<div class="today"> ${i} </div>`;
        }
        else{
        days += `<div> ${i} </div>`;
        }
        
        
    }
    
    for(let j=1; j<=nextDays; j++){
        days += `<div class="next-date"> ${j} </div>`;
        monthDays.innerHTML=days;
    }
    
}


document.querySelector(".prev").addEventListener('click', ()=>{
        if(date.getMonth()===0){
            date.setMonth(11);
            date.setFullYear(date.getFullYear()-1);

        }
        else{
            date.setMonth(date.getMonth()-1);
        }
        
        renderCalendar();

});

document.querySelector(".next").addEventListener('click', ()=>{
    
    if(date.getMonth()===11){
            date.setMonth(0);
            date.setFullYear(date.getFullYear()+1);

        }
        else{
            date.setMonth(date.getMonth()+1);
        }
        
        renderCalendar();

});
renderCalendar();
