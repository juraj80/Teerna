//*********************//
//    MAP RENDERER     //
//*********************//
//Defines the map renderer
class Map_Renderer {
    //***********//
    //CONSTRUCTOR//
    //***********//
    constructor(widthPercentage, heightPercentage, range){
        //Import variables
        this.portalWidthPercentage  = widthPercentage;
        this.portalHeightPercentage = heightPercentage;
        this.map_camRange           = range;
        this.focus                  = true;

        //Calculate dimensions
        this.portalWidth = (windowWidth / 100) * this.portalWidthPercentage;
        this.portalHeight = (windowHeight / 100) * this.portalHeightPercentage;

        //Calculate position
        this.portalPos = (windowWidth - this.portalWidth) / 2;

        //Load maps
        this.maps = [];
        this.maps.push(new Map("/resources/maps/testmap1.png", 45, 2));
        this.maps.push(new Map("/resources/maps/testmap2.png", 33, 2));
        this.maps.push(new Map("/resources/maps/testmap3.png", 36, 2));
        this.currentMap = this.maps[0];

        //Load graphics
        this.graphics = [];
        this.graphics.push(loadImage("/resources/graphics/Wall.png"));          //0
        this.graphics.push(loadImage("/resources/graphics/Door_Closed.png"));   //1
        this.graphics.push(loadImage("/resources/graphics/Door_Open.png"));     //2
        this.graphics.push(loadImage("/resources/graphics/L_Corner.png"));      //3
        this.graphics.push(loadImage("/resources/graphics/T_Corner.png"));      //4
        this.graphics.push(loadImage("/resources/graphics/X_Corner.png"));      //5
        this.graphics.push(loadImage("/resources/graphics/Pillar.png"));        //6
    }

    //*******************//
    //INITIALISES OBJECTS//
    //*******************//
    init(){
        //Initalise maps
        for(let i = 0; i < this.maps.length; i++){
            this.maps[i].init();
        }

        //Set up canvas
        this.portal = createCanvas(this.portalWidth, this.portalHeight, WEBGL);
        this.portal.position(this.portalPos, 0);
        this.portal.background(0);

        //Set up camera
        this.map_cam = new Map_Cam(this.map_camRange);

        //Create entities
        //Top doors
        this.maps[0].addEntity(this.graphics[2],
                               createVector(7, 0),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[2],
                               createVector(8, 0),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        //Bottom Doors
        this.maps[0].addEntity(this.graphics[1],
                               createVector(7, 23),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[1],
                               createVector(8, 23),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        //Pillars
        this.maps[0].addEntity(this.graphics[6],
                               createVector(2, 5),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[6],
                               createVector(2, 9),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[6],
                               createVector(2, 14),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[6],
                               createVector(2, 18),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[6],
                               createVector(13, 5),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[6],
                               createVector(13, 9),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[6],
                               createVector(13, 14),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[6],
                               createVector(13, 18),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        //Corners
        this.maps[0].addEntity(this.graphics[3],
                               createVector(0, 0),
                               "W",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[3],
                               createVector(15, 0),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[3],
                               createVector(0, 23),
                               "S",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[3],
                               createVector(15, 23),
                               "E",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        //Side walls
        for(let i = 1; i < 23; i++){
            this.maps[0].addEntity(this.graphics[0],
                                   createVector(0, i),
                                   "E",
                                   this.maps[0].minX,
                                   this.maps[0].minY,
                                   this.maps[0].tileSize);
            this.maps[0].addEntity(this.graphics[0],
                                   createVector(15, i),
                                   "E",
                                   this.maps[0].minX,
                                   this.maps[0].minY,
                                   this.maps[0].tileSize);
        }
        //Left walls
        for(let i = 1; i < 7; i++){
            this.maps[0].addEntity(this.graphics[0],
                                   createVector(i, 0),
                                   "N",
                                   this.maps[0].minX,
                                   this.maps[0].minY,
                                   this.maps[0].tileSize);
            this.maps[0].addEntity(this.graphics[0],
                                   createVector(i, 23),
                                   "M",
                                   this.maps[0].minX,
                                   this.maps[0].minY,
                                   this.maps[0].tileSize);
        }
        //Right walls
        for(let i = 9; i < 15; i++){
            this.maps[0].addEntity(this.graphics[0],
                                   createVector(i, 0),
                                   "N",
                                   this.maps[0].minX,
                                   this.maps[0].minY,
                                   this.maps[0].tileSize);
            this.maps[0].addEntity(this.graphics[0],
                                   createVector(i, 23),
                                   "M",
                                   this.maps[0].minX,
                                   this.maps[0].minY,
                                   this.maps[0].tileSize);
        }
    }

    //**********//
    //UPDATE MAP//
    //**********//
    update(){
        //Receive input
        this.checkInput();

        //Update camera
        this.map_cam.update();
    }

    //********//
    //DRAW MAP//
    //********//
    draw(){
        //Blank background
        background(0);

        //Draw map
        this.currentMap.draw(this.portal);
        
        //Debug code, can be stripped out of final
        //Draw focus object
//        push();
//            noStroke();
//            fill(255, 100, 0);
//            translate(this.map_cam.focusPos);
//            box(10);
//        pop();
    }

    //******************//
    //RECEIVE USER INPUT//
    //******************//
    checkInput(){
        //Check focus
        if(this.focus == false){
            //If we don't have focus don't accept input
            //Just exit the function
            return;
        }
        
        //Translation
        if(keyIsDown(UP_ARROW) && !keyIsDown(16)){
            this.map_cam.translate("UP");
        }
        if(keyIsDown(DOWN_ARROW) && !keyIsDown(16)){
            this.map_cam.translate("DOWN");
        }
        if(keyIsDown(LEFT_ARROW) && !keyIsDown(16)){
            this.map_cam.translate("LEFT");
        }
        if(keyIsDown(RIGHT_ARROW) && !keyIsDown(16)){
            this.map_cam.translate("RIGHT");
        }

        //Rotation
        if(keyIsDown(LEFT_ARROW) && keyIsDown(16)){
            this.map_cam.viewerAngle -= this.map_cam.viewerRotSpeed;
        }
        if(keyIsDown(RIGHT_ARROW) && keyIsDown(16)){
            this.map_cam.viewerAngle += this.map_cam.viewerRotSpeed;
        }

        //Scale
        if(keyIsDown(UP_ARROW) && keyIsDown(16)){
            //Scale down
            this.map_cam.viewerRange -= this.map_cam.viewerScaleSpeed;

            //Clamp
            if(this.map_cam.viewerRange < this.map_cam.minScale){
                this.map_cam.viewerRange = this.map_cam.minScale;
            }
        }
        if(keyIsDown(DOWN_ARROW) && keyIsDown(16)){
            //Scale up
            this.map_cam.viewerRange += this.map_cam.viewerScaleSpeed;

            //Clamp
            if(this.map_cam.viewerRange > this.map_cam.maxScale){
                this.map_cam.viewerRange = this.map_cam.maxScale;
            }
        }

        //Change map
        if(keyIsDown(49)){
            //Switch to map 1
            this.currentMap = this.maps[0];
        }
        if(keyIsDown(50)){
            //Switch to map 2
            this.currentMap = this.maps[1];
        }
        if(keyIsDown(51)){
            //Switch to map 3
            this.currentMap = this.maps[2];
        }
        
        //Currently not working
        //Orthographic mode has clipping problems
        //Change perspective
        //        if(keyIsDown(79)){
        //            //Switch to orthographic mode
        //            ortho();
        //        }
        //        if(keyIsDown(80)){
        //            //Switch to perspectival mode
        //            perspective();
        //        }

        //Clamp focus point after translation or map change
        this.map_cam.clampFocus(this.currentMap.minX,
                                this.currentMap.minY,
                                this.currentMap.maxX,
                                this.currentMap.maxY);
    }

    //*****************//
    //RESIZE THE PORTAL//
    //*****************//
    resize(){
        //Recalculate dimensions
        this.portalWidth = (windowWidth / 100) * this.portalWidthPercentage;
        this.portalHeight = (windowHeight / 100) * this.portalHeightPercentage;

        //Recalculate position
        this.portalPos = (windowWidth - this.portalWidth) / 2;

        //Resize/Reposition canvas
        resizeCanvas(this.portalWidth, this.portalHeight);
        this.portal.position(this.portalPos, 0);
    }
}