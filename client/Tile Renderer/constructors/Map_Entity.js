//*******************//
//    MAP ENTITY     //
//*******************//
//Defines objects on the map
class Map_Entity {
    //***********//
    //CONSTRUCTOR//
    //***********//
    constructor(graphic, coords, orientation, minX, minY, tileSize){
        //Import data
        this.graphic = graphic;
        this.coords = coords;
        this.orientation = orientation;
        this.minX = minX;
        this.minY = minY;
        this.tileSize = tileSize;
        this.halfTile = tileSize/2;

        //Calculate position
        this.position = createVector(this.minX + (this.coords.x * this.tileSize),
                                     this.minY + (this.coords.y * this.tileSize));
    }

    //***********//
    //INITIALISER//
    //***********//
    init(){
        
    }

    //***********//
    //DRAW ENTITY//
    //***********//
    draw(){
        push();
            //Set angle mode
            angleMode(DEGREES);
            
            //Check orientation
            switch(this.orientation){
                case "N":
                    //Translate into position
                    translate(this.position.x,
                              this.position.y);
                    break;
                case "S":
                    //Translate into position
                    translate(this.position.x + this.tileSize,
                              this.position.y + this.tileSize);
                    //Rotate to correct facing
                    rotateZ(180);
                    break;
                case "E":
                    //Translate into position
                    translate(this.position.x + this.tileSize,
                              this.position.y);
                    //Rotate to correct facing
                    rotateZ(90);
                    break;
                case "W":
                    //Translate into position
                    translate(this.position.x,
                              this.position.y + this.tileSize);
                    //Rotate to correct facing
                    rotateZ(270);
                    break;
                default:
                    //Set orientation to default
                    this.orientation = "N";
                    //Translate into position
                    translate(this.position.x,
                              this.position.y);
            }
            //Rotate so facing upwards
            rotateX(90);
            //Draw north/south face
            push();
                translate(0,this.tileSize,0 - this.halfTile);
                rotateX(180);
                image(this.graphic,
                      0,0,
                      this.tileSize,this.tileSize,
                      0,0,
                      512,512);
            pop();
            //Draw west/east face
            push();
                translate(this.halfTile,this.tileSize,0);
                rotateX(180);
                rotateY(270);
                image(this.graphic,
                      0,0,
                      this.tileSize,this.tileSize,
                      512,0,
                      512,512);
            pop();
        pop();
    }
}