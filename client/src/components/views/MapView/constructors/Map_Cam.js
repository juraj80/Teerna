//****************//
//    MAP CAM     //
//****************//
//Defines the camera used by the map renderer

export class Map_Cam {
    //***********//
    //CONSTRUCTOR//
    //***********//
    constructor(p, range){
        //Initial variables
        this.p = p;
        this.viewerRange        = range;
        this.viewerTransSpeed   = 5;
        this.viewerRotSpeed     = 2;
        this.viewerScaleSpeed   = 5;
        this.minScale           = 250;
        this.maxScale           = 1000;

        //Calculate positions
        this.focusPos = this.p.createVector(0,
                                     0,
                                     0);
        this.viewerPos = this.p.createVector(this.focusPos.x - this.viewerRange,
                                      this.focusPos.y - this.viewerRange,
                                      this.focusPos.z - this.viewerRange);
        this.viewerAngle = 225;

        //Create camera
        this.viewer = this.p.createCamera();
        this.p.setCamera(this.viewer);
        this.viewer.camera(this.viewerPos.x,
                           this.viewerPos.y,
                           this.viewerPos.z,
                           0,0,0,
                           0,0,-1);
        this.viewer.lookAt(this.focusPos.x,
                           this.focusPos.y,
                           this.focusPos.z);
        this.viewer.perspective();
    }

    //*************//
    //UPDATE CAMERA//
    //*************//
    update(){
        //Calculate position
        this.calcPos();

        //Position camera
        this.viewer.camera(this.viewerPos.x,
                           this.viewerPos.y,
                           this.viewerPos.z,
                           0,0,0,
                           0,0,-1);
        this.viewer.lookAt(this.focusPos.x,
                           this.focusPos.y,
                           this.focusPos.z);
    }

    //********************//
    //FIND CAMERA POSITION//
    //********************//
    calcPos(){
        this.p.push();
            //Calculate x and y
            this.p.angleMode(this.p.DEGREES);
            let viewerX = this.focusPos.x + (this.p.sin(this.viewerAngle) * this.viewerRange);
            let viewerY = this.focusPos.y + (this.p.cos(this.viewerAngle) * this.viewerRange);
            
            //Set position
            this.viewerPos.x = viewerX;
            this.viewerPos.y = viewerY;
            this.viewerPos.z = this.viewerRange;
        this.p.pop();
    }

    //****************//
    //TRANSLATE CAMERA//
    //****************//
    translate(direction){
        //Filter by direction
        switch(direction){
            case "UP":
                this.focusPos.x -= this.viewerTransSpeed * this.p.sin(this.viewerAngle);
                this.focusPos.y -= this.viewerTransSpeed * this.p.cos(this.viewerAngle);
                break;
            case "DOWN":
                this.focusPos.x += this.viewerTransSpeed * this.p.sin(this.viewerAngle);
                this.focusPos.y += this.viewerTransSpeed * this.p.cos(this.viewerAngle);
                break;
            case "LEFT":
                this.focusPos.x -= this.viewerTransSpeed * this.p.cos(this.viewerAngle);
                this.focusPos.y += this.viewerTransSpeed * this.p.sin(this.viewerAngle);
                break;
            case "RIGHT":
                this.focusPos.x += this.viewerTransSpeed * this.p.cos(this.viewerAngle);
                this.focusPos.y -= this.viewerTransSpeed * this.p.sin(this.viewerAngle);
                break;
            default:
                break;
        }
    }

    //***********//
    //CLAMP FOCUS//
    //***********//
    //Constrains camera focus to map bounds
    clampFocus(minX, minY, maxX, maxY){
        //Clamp focal position
        //Clamp X
        if(this.focusPos.x < minX){
            this.focusPos.x = minX;
        } else if(this.focusPos.x > maxX){
            this.focusPos.x = maxX;
        }
        //Clamp y
        if(this.focusPos.y < minY){
            this.focusPos.y = minY;
        } else if(this.focusPos.y > maxY){
            this.focusPos.y = maxY;
        }
    }
}