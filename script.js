const bar = document.querySelector('.progress-bar'); 
const progress = document.querySelector('.progress'); 
const loading = document.querySelector('.loading'); 

let i = 0;
const progressData = [5,12,15,30,35,45,60,69,85,100];

const interval = setInterval(()=>{
    progress.style.width = `${progressData[i]}%`;
    loading.innerHTML = `${progressData[i]}%`;
    i++;
     if(i == progressData.length) {
        loading.innerHTML = "Complete"
         clearInterval(interval)
        };
},1000)
