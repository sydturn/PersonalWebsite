function openOne(clicked) {
    var textFile;
    switch(clicked) {
        case "Albert":
            textFile = "../text/Albert.txt"
            break;  
        case "OrangeJumpsuits":
            textFile = "../text/OrangeJumpsuits.txt"
            break;
        case "Prince":
            textFile = "../text/Prince.txt"
            break;
        case "Flipped":
            textFile = "../text/flipped.txt"
            break;
        case "DeadWalking":
            textFile = "../text/DeadWalking.txt"
            break;
        case "Flight":
            textFile = "../text/FlightN611.txt"
            break;
        case "Novella":
            textFile = "../text/Novella.txt"
            break;
        case "MonologueOne":
            textFile = "../text/MonologueOne.txt"
            break;
        case "MonologueTwo":
            textFile = "../text/MonologueTwo.txt"
            break;
        case "Lessons":
            textFile = "../text/Lessons.txt"
            break;
    }
    xhr = new XMLHttpRequest();
    xhr.open("GET", textFile);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4){               
            window.open("", "_blank", "scrollbars=yes,top=100,left=600,width=700,height=700").document.write(xhr.responseText);
        }
    }
}