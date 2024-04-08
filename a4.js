
var x = document.getElementById("hide");
var z = document.getElementById("show");
var a = document.getElementById("captial");
var tog = document.getElementById("toggle");
var green = document.getElementById("changeBackground");
var yellow = document.getElementById("cchange")


function hideOrVisable(){
    if (a.style.visibility == "visible"){
        hide();
    } else {
       visable();
    }
}

function bacToGreen(){
    document.body.style.background= "green";
}

function hide(){
    a.style.visibility = "hidden";
}
function visable(){
    a.style.visibility = "visible";
}
function bacToYellow(){
    document.body.style.background = "yellow";
}
function bacToOrigin(){
    document.body.style.background = "white";
}


yellow.addEventListener("mouseenter",bacToYellow)
yellow.addEventListener("mouseleave",bacToOrigin)
green.addEventListener("click", bacToGreen);
z.addEventListener("click", visable);
x.addEventListener("click", hide); 
tog.addEventListener("click",hideOrVisable);