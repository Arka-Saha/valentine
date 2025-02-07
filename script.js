let txt = document.querySelector("#head");
const messages = ["happiieeee", "rosseey 🌹", "daayyy naa", "shhh", "my", "beautiffulllest 🥺✨", "rooseey bubuu ❤️"];


let i = 0;
let intv = setInterval(() => {
    if(i<messages.length)
    {
        txt.textContent = messages[i++];
    }else{
        clearInterval(intv);
    }
    
}, 1000);
