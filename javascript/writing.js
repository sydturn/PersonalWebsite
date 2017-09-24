function openOne(clicked) {
    var textFile;
    var title = document.getElementById("storyTitle"); 
    switch(clicked) {
        case "Albert":
            textFile = "./text/Albert.txt"
            title.innerHTML = "<b>Albert</b>";
            break;  
        case "OrangeJumpsuits":
            textFile = "./text/OrangeJumpsuits.txt"
            title.innerHTML = "<b>Orange Jumpsuits (Sestina)</b>";
            break;
        case "Prince":
            textFile = "./text/Prince.txt"
            title.innerHTML = "<b>Orange Jumpsuits (Sestina)</b>";
            break;
        case "Flipped":
            textFile = "./text/flipped.txt"
            title.innerHTML = "<b>Flipped</b>";
            break;
        case "DeadWalking":
            textFile = "./text/DeadWalking.txt"
            title.innerHTML = "<b>The Dead Will Walk</b>";
            break;
        case "Flight":
            textFile = "./text/FlightN611.txt"
            title.innerHTML = "<b>FLIGHT N611<br />(Final Short Play)</b>";
            break;
        case "Novella":
            textFile = "./text/Novella.txt"
            title.innerHTML = "<b>Romeo</b>";
            break;
        case "MonologueOne":
            textFile = "./text/MonologueOne.txt"
            title.innerHTML = "<b>Satirical Monologue 1</b>";
            break;
        case "MonologueTwo":
            textFile = "./text/MonologueTwo.txt"
            title.innerHTML = "<b>Monologue 2 (Rich Man, Poor Man)";
            break;
        case "Lessons":
            textFile = "./text/Lessons.txt"
            title.innerHTML = "<b>Tough Lessons to Learn</b>";
            break;
    }
    xhr = new XMLHttpRequest();
    xhr.open("GET", textFile);
    xhr.send();

    xhr.onreadystatechange = function() {
            document.getElementById("story").innerHTML = xhr.responseText;
            console.log(xhr.responseText);        
    }
}