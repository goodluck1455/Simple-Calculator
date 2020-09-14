
let display = document.querySelector(".A-display");
let displayB = document.querySelector(".B-display");
let btns = document.querySelectorAll(".btn");
let equall = document.querySelector(".equal");
let delet = document.querySelector(".delet");
let deleAll = document.querySelector(".deleAll");
let extraInfo = document.querySelector(".extra-info");
let showExtraInfo = document.querySelector("#x-info");


showExtraInfo.addEventListener("click", ()=>{
    extraInfo.classList.toggle("open");
    return;
})

btns.forEach(ptn => {
    ptn.addEventListener("click", ()=>{
        let content = ptn.getAttribute("value");
        display.textContent += content;
    })

})

equall.addEventListener("click", ()=>{
    let answer = display.textContent;
    displayB.textContent = eval(answer);
    displayB.textContent = math.sin(answer);

})

delet.addEventListener("click" , ()=>{
    let str = display.textContent ;
    let arr = str.split('') ;
    arr.pop();
    display.textContent = arr.join('') ;
})

deleAll.addEventListener("click", ()=>{
    display.textContent = "";
    displayB.textContent = "";
})

