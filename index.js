const canvas = document.getElementById("canvas");
const ai_text = document.getElementById("AI");
const ai_time = document.getElementById("AItime");
const user_text = document.getElementById("user");
const user_time = document.getElementById("usertime");

// Settings
const maxTime = 60;

let turn = 0;
let starttime = new Date();

setInterval(() => {
    const babo = maxTime - Math.floor((new Date() - starttime)/1000)
    if (turn == 0) {
        ai_text.style.color = "#ffffff"
        user_text.style.color = "#0592f7";
        user_time.innerHTML = babo;
    } else if (turn == 1) {
        user_text.style.color = "#ffffff"
        ai_text.style.color = "#0592f7";
        ai_time.innerHTML = babo;
    }
    if(babo <= 0) {
        turn = (turn+1)%2;
        starttime = new Date();
    }
}, 100)
console.log("hei")