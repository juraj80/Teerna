//****************//
//    MAP CAM     //
//****************//
//Defines the camera used by the map renderer
class Map_Cam {
    //***********//
    //CONSTRUCTOR//
    //***********//
    constructor(range){
        //Initial variables
        this.viewerRange        = range;
        this.viewerTransSpeed   = 5;
        this.viewerRotSpeed     = 2;
        this.viewerScaleSpeed   = 5;
        this.minScale           = 250;
        this.maxScale           = 1000;

        //Calculate positions
        this.focusPos = createVector(0,
                                     0,
                                     0);
        this.viewerPos = createVector(this.focusPos.x - this.viewerRange,
                                      this.focusPos.y - this.viewerRange,
                                      this.focusPos.z - this.viewerRange);
        this.viewerAngle = 225;

        //Create camera
        this.viewer = createCamera();
        setCamera(this.viewer);
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
        push();
            //Calculate x and y
            angleMode(DEGREES);
            let viewerX = this.focusPos.x + (sin(this.viewerAngle) * this.viewerRange);
            let viewerY = this.focusPos.y + (cos(this.viewerAngle) * this.viewerRange);
            
            //Set position
            this.viewerPos.x = viewerX;
            this.viewerPos.y = viewerY;
            this.viewerPos.z = this.viewerRange;
        pop();
    }

    //****************//
    //TRANSLATE CAMERA//
    //****************//
    translate(direction){
        //Filter by direction
        switch(direction){
            case "UP":
                this.focusPos.x -= this.viewerTransSpeed * sin(this.viewerAngle);
                this.focusPos.y -= this.viewerTransSpeed * cos(this.viewerAngle);
                break;
            case "DOWN":
                this.focusPos.x += this.viewerTransSpeed * sin(this.viewerAngle);
                this.focusPos.y += this.viewerTransSpeed * cos(this.viewerAngle);
                break;
            case "LEFT":
                this.focusPos.x -= this.viewerTransSpeed * cos(this.viewerAngle);
                this.focusPos.y += this.viewerTransSpeed * sin(this.viewerAngle);
                break;
            case "RIGHT":
                this.focusPos.x += this.viewerTransSpeed * cos(this.viewerAngle);
                this.focusPos.y -= this.viewerTransSpeed * sin(this.viewerAngle);
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