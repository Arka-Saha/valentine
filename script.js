let head = document.querySelector(".head");
let txt = document.querySelector(".txt");
let pic = document.querySelector("img");


const head_arr = ["myy", "little", "pookkie bear na", "happiieiest", "teddyy", "dayy na", "myy booboo hehe", "m-me", "mee be your teddy okie🤭❤️"];
const txt_arr = ["tiiss m-me hehe", "and", "tis yaa shhh","andndd", "tiss w-we ususu❤️", "tis alsos hehe 👉👈🥺", "a-and tiss too 🫣", "andndd", "ya take orkho teddy okie"];
const pics = ["bububear.png","bububear.png","dudu.png", "dudu.png", "hug1.png", "hug3.gif", "hug2.gif", "hug2.gif", "orkho.png"];

let i =0;
let intv1 = setInterval(() => {
    if(i<head_arr.length)
        {head.textContent = head_arr[i];i++;}
    else 
    {clearInterval(intv1);i=0;
    let j=0;
    let intv2 =  setInterval(() => {
        if (j<txt_arr.length)
        {
            txt.textContent = txt_arr[j];
            pic.src = `${pics[j]}`;
            j++
        }
        else
        {
            clearInterval(intv2)
            setTimeout(() => {
                window.alert("hehe me lobsu hehe");
            }, 1500);;
        }

}, 1000);
    }

}, 1000);
