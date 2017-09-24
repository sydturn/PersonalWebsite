function someOtherFunction(clicked) {
    var textFile;
    var title = document.getElementById("recipeTitle"); 
    switch(clicked) {
        case "doubleChocolate":
            textFile = "./text/Recipes/doublechocolatecookies.txt"
            title.innerHTML = "<b>Double Chocolate Cookies</b>";
            break; 
        case "candyPizza":
            textFile = "./text/Recipes/candypizza.txt"
            title.innerHTML = "<b>Candy Pizza</b>";
            break;
        case "blackForest":
            textFile = "./text/Recipes/quickblackforest.txt"
            title.innerHTML = "<b>Black Forest Cake</b>";
            break;
        case "jelloCookies":
            textFile = "./text/Recipes/jellocookies.txt"
            title.innerHTML = "<b>Jello Cookies</b>";
            break;
        case "chocolateChip":
            textFile = "./text/Recipes/chocolatechip.txt"
            title.innerHTML = "<b>Chewy Chocolate Chip Cookies</b>";
            break;
        case "sugarCookies":
            textFile = "./text/Recipes/sugarcookies.txt"
            title.innerHTML = "<b>Sugar Cookies</b>";
            break;
        case "pumpkinSquares":
            textFile = "./text/Recipes/pumpkinsquares.txt"
            title.innerHTML = "<b>Pumpkin Squares</b>";
            break;
        case "croutons":
            textFile = "./text/Recipes/croutons.txt"
            title.innerHTML = "<b>Garlic Croutons</b>";
            break;
        case "macandcheese":
            textFile = "./text/Recipes/macaroniandcheese.txt"
            title.innerHTML = "<b>Homemade Macaroni and Cheese</b>";
            break;
        case "orientalWings":
            textFile = "./text/Recipes/orientalwings.txt"
            title.innerHTML = "<b>Oriental Wings</b>";
            break;
        case "honeysrirachawings":
            textFile = "./text/Recipes/honeysrirachawings.txt"
            title.innerHTML = "<b>Honey Sriracha Wings</b>";
            break;
    }
    xhr = new XMLHttpRequest();
    xhr.open("GET", textFile);
    xhr.send();

    xhr.onreadystatechange = function() {
            document.getElementById("recipeBody").innerHTML = xhr.responseText;
            console.log(xhr.responseText);        
    }
}