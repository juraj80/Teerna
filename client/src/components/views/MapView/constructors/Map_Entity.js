//*******************//
//    MAP ENTITY     //
//*******************//
//Defines objects on the map
export class Map_Entity {
    //***********//
    //CONSTRUCTOR//
    //***********//
    constructor(p, graphic, coords, orientation, minX, minY, tileSize){
        //Import data
        this.p = p;
        this.graphic = graphic;
        this.coords = coords;
        this.orientation = orientation;
        this.minX = minX;
        this.minY = minY;
        this.tileSize = tileSize;
        this.halfTile = tileSize/2;

        //Calculate position
        this.position = this.p.createVector(this.minX + (this.coords.x * this.tileSize),
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
        this.p.push();
            //Set angle mode
            this.p.angleMode(this.p.DEGREES);
            
            //Check orientation
            switch(this.orientation){
                case "N":
                    //Translate into position
                    this.p.translate(this.position.x,
                              this.position.y);
                    break;
                case "S":
                    //Translate into position
                    this.p.translate(this.position.x + this.tileSize,
                              this.position.y + this.tileSize);
                    //Rotate to correct facing
                    this.p.rotateZ(180);
                    break;
                case "E":
                    //Translate into position
                    this.p.translate(this.position.x + this.tileSize,
                              this.position.y);
                    //Rotate to correct facing
                    this.p.rotateZ(90);
                    break;
                case "W":
                    //Translate into position
                    this.p.translate(this.position.x,
                              this.position.y + this.tileSize);
                    //Rotate to correct facing
                    this.p.rotateZ(270);
                    break;
                default:
                    //Set orientation to default
                    this.orientation = "N";
                    //Translate into position
                    this.p.translate(this.position.x,
                              this.position.y);
            }
            //Rotate so facing upwards
            this.p.rotateX(90);
            //Draw north/south face
            this.p.push();
                this.p.translate(0,this.tileSize,0 - this.halfTile);
                this.p.rotateX(180);
                this.p.image(this.graphic,
                      0,0,
                      this.tileSize,this.tileSize,
                      0,0,
                      512,512);
            this.p.pop();
            //Draw west/east face
            this.p.push();
                this.p.translate(this.halfTile,this.tileSize,0);
                this.p.rotateX(180);
                this.p.rotateY(270);
                this.p.image(this.graphic,
                      0,0,
                      this.tileSize,this.tileSize,
                      512,0,
                      512,512);
            this.p.pop();
        this.p.pop();
    }
}