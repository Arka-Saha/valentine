let head = document.getElementById("txt1");
let txt = document.getElementById("txt2");
let btn = document.getElementById("btn");
let pic = document.getElementById("photo");

btn.style.visibility = "hidden";

let head_arr = ["bubududu na", "supahhh", "happiiestt", "chociieie", "dayyy", "na", "mah babeyy ❤️🥺", "cheheh 👉👈🤭", "🥺✨🍫"];
let pics = ["bounty.png", "feast.webp", "fero.png", "gems.png", "hershey.png", "kinder.webp", "loli.png", "orkho.jpeg"]
let txt_arr= ["MUEHEHEH ouurur favouriteyy chocie shhh","yaa makey me feel richie like MR BEAST shh", "Yaa more BEAUTIFULLL and PRECIOUSS than tis", "Ya mah little GEMMM na hehehee", "c-can me hab oneu (maney) KIMSIE hehe", "ya alwaysys gib orkho hearty JOYJOY", "L-loli meow we shareyy", "well ya can hab ORKHOO too 👉👈🫣"];
let btn_arr=["w-we hab okie", "meow Mr Orkho", "hehehe", "pondaa gemy", "okie only oneu 😒", "🥺👉👈✨", "l-loli mine 😾", "orkhoo 👀(mine too)"];

let i = 0;
let intv = setInterval(() => {
    if(i<head_arr.length)
    {
        head.textContent = head_arr[i];
        i++;

    }
    else{
        i=0;
    btn.style.visibility = "visible";
    clearInterval(intv);
    }
    
}, 1000);

btn.onclick = () =>
{
    if(i<btn_arr.length)
    {
        pic.src = `img/${pics[i]}`;
        btn.textContent = btn_arr[i];
        txt.textContent = txt_arr[i];
        i++;
    }
    else
    {
        window.open("img/orkho.jpeg");
    }
}
