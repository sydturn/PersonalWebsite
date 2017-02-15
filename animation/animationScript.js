ispaused = true;
canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

noFire = new Image();
deer = new Image(); 
dragon = new Image();
dragonFire = new Image();
background = new Image();
treasure = new Image();
bones = new Image();
treasureChest = new Image();
coin = new Image(); 
victory = new Image();

noFire.src = "noFire.png";
deer.src = 'running.png';
dragon.src = "death.png";
dragonFire.src = "goFire.png";
background.src = "cave.jpg";
treasure.src = "treasure.png";
bones.src = "bones.png";
treasureChest.src = "chest.png";
coin.src = "coin.png";
victory.src = "victory.png";

canvas.onmousedown = function(e) {
    e.preventDefault;
    e.stopPropagation;
    ispaused = !ispaused;  
}

var frameWidth = 98.5; 
var dragonWidth = 0;
var movement = 550;
var chestAnimation = 0;
var coinWidth = 0;
var coinPosition = 210;
var fireWidth = 0;
var victoryWidth = 0;

var die = false;
var isPlaying = false;
ctx.fillStyle = "black";
ctx.font = "bold 16px Arial";
ctx.fillText("Click the screen to Play or Pause. Ctrl+R to restart!", 50, 150);
setInterval(animate, 1000/15);

function animate() {
    if(!ispaused || finished) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background,0,0);
        ctx.drawImage(treasure,200,200,200,70);
        ctx.drawImage(bones,-30,170,100,70);
        
        //if dragon is dead, draw dead dragon and victory
        if(die) {
            ctx.drawImage(dragon, dragonWidth, 0, 120, dragon.height, 130, 150, 100, dragon.height);
            ctx.drawImage(victory, victoryWidth, 0, 63, victory.height, 205, 175, 63, victory.height);
        }
        
        //if dragon is not dead, draw fire
        if(!die && movement <= 400) {
            ctx.drawImage(dragonFire, fireWidth, 0, 231, dragonFire.height, 70, 140, 231, dragonFire.height);
            
        }
        if(!die) {
            ctx.drawImage(deer, frameWidth, 0, 100, deer.height, movement, 200, 100, deer.height);
        }
        
        ctx.drawImage(treasureChest, chestAnimation, 0, 38, treasureChest.height, 10, 210, 38, treasureChest.height);
        
        //if chest is open, draw coin
        if(chestAnimation == 0.1) {
            ctx.drawImage(coin, coinWidth, 0, 18, coin.height, 25, coinPosition, 18, coin.height);
        }
        
        if(movement >= 400) {
            ctx.drawImage(noFire, 0, 0, 221, noFire.height, 70, 140, 221, noFire.height);
        }
        
        //<------------------------Begin annimations----------------------------->
        
        
        //if dragon not dead, breath fire
        if(!die && movement <= 400) {
            if(fireWidth < 4600 && fireWidth != 0.1) {
                fireWidth += 231;
            }
            else {
                fireWidth = 0.1;
            }
        }
        
        //charging animation
         if(movement > 200) {
             movement-= 5;

            if(frameWidth < (600)) {
                frameWidth += 100;
            }
            else {
                frameWidth = 0;
            }
         }
        //if charging is done load attack attack animation
        else if(movement == 200){
            frameWidth = 0;
            movement = 199;
            deer.src = "attackX.png";
        }
        
        //run attack animation
        else {
            if(frameWidth < (400) && frameWidth!=0.1)  {
                frameWidth += 100;
            }
            //begin idle
            else {
                deer.src = "idle.png";
                frameWidth = 0.1;
            }
        }
        
        //dragon death animation
        if(movement == 199 && frameWidth == 0.1) {
            die = true;
        }
        
        if(die) {
            if(dragonWidth < 700 && dragonWidth != 0.1) {
                dragonWidth += 150;
            }
            else {
                dragon.src = "deathIdle.png";
                dragonWidth = 0.1;
            }
        }
        
        if(dragonWidth == 0.1) {
            if(chestAnimation < 142 && chestAnimation != 0.1) {
                chestAnimation += 38;
            }
            else {
                chestAnimation = 0.1;
                treasureChest.src = "chestIdle.png";
            }
        }
        
        if(chestAnimation == 0.1) {
            if(coinWidth < 53) {
                coinWidth += 18;
            }
            else {
                coinWidth = 0;
            }
            if(coinPosition > 195) {
                coinPosition -=3;
            }
        }
        
        var finished = false;
        if(die && chestAnimation == 0.1) {
            if(victoryWidth < 378 && victoryWidth != 0.1) {
                victoryWidth += 63;
            }
            else {
                victoryWidth = 0.1
                victory.src = "victoryIdle.png";
                finished = true;
            }
        }
        
        if(finished) {
            var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
            gradient.addColorStop("0","blue");
            gradient.addColorStop("0.5", "green");
            gradient.addColorStop("1.0","white");

            ctx.fillStyle = gradient;
            ctx.strokeStyle = 'white';

            ctx.font = '50pt Arial';
            ctx.fillText('Victory!', 150, 150);
            ctx.strokeText('Victory!', 150, 150);

            ctx.fill();
            ctx.stroke();
            paused = true;
        }
    }
    
    if(finished && !isPlaying) {
        isPlaying = true;
        clearInterval(animate);
        var champion = new Audio("champion.mp3"); 
        champion.play();
    }
}