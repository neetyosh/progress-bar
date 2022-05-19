const progress = document.querySelector('.progress-circle');
const circumfrence = progress.getTotalLength();
const loading = document.querySelector(".loading");

let i = 0;
let percent = [0,10,25,30,55,60,70,75,90,100];

const interval =setInterval(()=>{
    progress.style.strokeDashoffset = circumfrence - (percent[i]/100)*circumfrence;
    loading.innerHTML = `${percent[i]}%`;
    i++;
    if(i == percent.length) clearInterval(interval);
},1000);