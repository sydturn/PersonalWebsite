var w = 1800;
var h = 720;
var game = new Phaser.Game(w, h, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });
var sprites = [];

function preload() {

}

function create() {
  game.stage.backgroundColor = "#4488AA";

  var graphics = game.add.graphics(0, 0);
  for(var i = 0; i < w; i += 20) {
      graphics.moveTo(i,0);
      graphics.lineTo(i,h);
      graphics.endFill();
      graphics.moveTo(0,i);
      graphics.lineTo(w,i);
      graphics.lineStyle(1, 0xb3ffec, 1);
      graphics.endFill();
  }
}

function createPiece() {
    var graphics = game.add.graphics(0, 0);
    var couch = game.add.sprite(300, 300);
    couch.addChild(graphics);
    //  Input Enable the sprites
    couch.inputEnabled = true;
    //  Allow dragging - the 'true' parameter will make the sprite snap to the center
    couch.input.enableDrag(true);

    var x = document.getElementById("frm1");
    var text = "";
    var i;

    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }

    var height = x.elements[0].value;
    var width = x.elements[1].value;
    var colour = "0x" + (x.elements[2].value);
    graphics.lineStyle(2, colour, 1);
    graphics.beginFill(colour, 1)
    graphics.drawRect(-width/2, -height/2, parseInt(width), parseInt(height));

    // var style = { font: "32px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: couch.width, align: "center"};
    // text = game.add.text(0, 0, "- text on a sprite -\ndrag me", style);
    // text.anchor.set(0.5);

    couch.anchor.x = 0.5;
    couch.anchor.y = 0.5;
    sprites.push(couch);
}

function rotate() {
    sprites[0].angle +=15;
}

function remove() {
    sprites[0].destroy();
    sprites.shift();
}
