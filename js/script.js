let sideBar = document.querySelector('.sidebar');
let toggleBtn = document.querySelector('.bx-menu');

toggleBtn.onclick = function(){
    sideBar.classList.toggle("active");
}

// lkdfjagkjaslkkagakfakljgkgkl

let display = document.getElementById('display');


function appendToDisplay(input){
    display.value += input;
}

function ClearDisplay(){
    display.value = "";
}

function del(){
    display.value = display.value.slice(0,-1);
}

function Calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Invalid";
    }
}

