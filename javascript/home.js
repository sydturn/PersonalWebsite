setTimeout(function convo() {
    var me = document.getElementById("me");
    me.style.display = "block";   
}, 1000);

setTimeout(function() {
    var you = document.getElementById("you");
    you.style.display = "block"; 
},3000);

var pictures = ["images/homePage/goAboutMe.png","images/homePage/goArt.png","images/homePage/goContactMe.png","images/homePage/goProgramming.png","images/homePage/goResume.png","images/homePage/goWriting.png"];

var me;
var page;

setTimeout(function() {
    me = document.getElementById("final");
    shuffle(pictures);
    me.src = pictures[0];
    page = pictures[0];
    me.style.display = "block";
}, 5000);

var go;
var no;

setTimeout(function() {
    go = document.getElementById("goto");
    no = document.getElementById("no");
    go.style.display = "inline-block";
    no.style.display = "inline-block";
}, 6500);

function goTo() {
    switch(page) {
        case "images/homePage/goAboutMe.png":
            window.location = "aboutMe.html";
            break;
        case "images/homePage/goArt.png":
            window.location = "art.html";
            break;
        case "images/homePage/goContactMe.png":
            window.location = "ContactMe.html";
            break;
        case "images/homePage/goProgramming.png":
            window.location = "programming.html";
            break;
        case "images/homePage/goResume.png":
            window.location = "resume.html";
            break;
        case "images/homePage/goWriting.png":
            window.location = "writing.html";
            break;
        case "images/homePage/stay.png":
            break;
    }       
}

var lastMessage = false;

function stay() {
    pictures.shift();
    if(pictures.length == 0) {
        me.src = "images/homePage/stay.png";
        page = "images/homePage/stay.png";
        if(!lastMessage) {
            go.style.display = "none";
            no.style.display = "none";
        }
        lastMessage = true;
    }
    else {
        me.src = pictures[0];
        page = pictures[0];
    }
}

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}