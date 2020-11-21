var ball;

var database , position , ball1; 

function setup(){
    createCanvas(500,500);

    database=firebase.database();

    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "red";

    var ball1Position = database.ref('ball/position');
    ball1Position.on("value", readPosition , showError);
}

function draw(){
    background("white");

    if(position!==undefined){

    if(keyDown(LEFT_ARROW)){

        writePosition(-5 , 0);

    }

    else if(keyDown(RIGHT_ARROW)){

        writePosition(5 , 0);

    }

    else if(keyDown(UP_ARROW)){

        writePosition(0 , -5);

    }

    else if(keyDown(DOWN_ARROW)){

        writePosition(0 , 5);

    }

    drawSprites();

}
}

function writePosition(x , y){

    database.ref('ball/position').set({
      x:position.x + x,
      y:position.y + y
      }
    )

}

function showError(){

    console.log("error");

}

function readPosition(data){

    position = data.val();

    ball1.x = position.x;
    ball1.y = position.y;

}