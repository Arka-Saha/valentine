let head = document.querySelector(".head");
let ringtxt = document.querySelector(".ring-txt");

let head_arr1 = ["bubuududu na,", "happieiest", "proposeyy 🥺", "dayyy", "okie na 🫶", "shhhh hehe", "❤️🥺"];
let ring_arr1 = ["sweetheart", "youuu", "are", "mah", "forebahh na 🌹", "I love you bubu 🥺"]

let headarr2 = ["babyy", "will", "you", "be", "m-my", "valentinee?", "🥺 hehe", "Will you be my valentine baby? 🥺❤️"];
let i = 0;
let intv1 = setInterval(() => {

    if(i!= head_arr1.length)
    {
        head.textContent = head_arr1[i];
        i++;
    }else{
    clearInterval(intv1);}
    
    
}, 1000);

setTimeout(() => {
    let j=0;
    let intv2 = setInterval(() => {
        if(j!= ring_arr1.length)
            {
                ringtxt.textContent = ring_arr1[j];
                j++;
            }else{
            clearInterval(intv2);}
    }, 1000);

}, 8500);

setTimeout(() => {
   
    let a = 0;
    let intv3 = setInterval(() => {
        if(a!= headarr2.length)
            {
                head.textContent = headarr2[a];
                a++;
            }else{
            clearInterval(intv3);}
    }, 1000);

}, 15000);
