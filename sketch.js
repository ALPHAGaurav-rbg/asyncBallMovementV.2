var ball 
function setup(){
createCanvas(500,500);
ball=createSprite(250,250,25,25);
ball.shapeColor = "blue";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1.0);
    }

    if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    
    if(keyDown(UP_ARROW)){
        changePosition(0.-1);
    }

    if(keyDown(DOWN_ARROW)){
        changePosition(0,+1)
    }
    drawSprites();

}

function changePosition(x,y){
    ball.x = ball.x + y;
    ball.y = ball.y + x;
}