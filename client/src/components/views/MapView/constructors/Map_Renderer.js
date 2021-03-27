//*********************//
//    MAP RENDERER     //
//*********************//
import { images } from '../../../../assets';
import { Map } from './Map';
import { Map_Cam } from './Map_Cam';
//Defines the map renderer
export class Map_Renderer {
    //***********//
    //CONSTRUCTOR//
    //***********//
    constructor(p, widthPercentage, heightPercentage, range){
        //Import variables
        this.p = p;
        this.portalWidthPercentage  = widthPercentage;
        this.portalHeightPercentage = heightPercentage;
        this.map_camRange           = range;
        this.focus                  = true;
        this.selected               = 0;

        //Calculate dimensions
        this.portalWidth = (p.windowWidth / 100) * this.portalWidthPercentage;
        this.portalHeight = (p.windowHeight / 100) * this.portalHeightPercentage;

        //Calculate position
        this.portalPos = (p.windowWidth - this.portalWidth) / 2;

        //Load maps
        this.maps = [];
        this.maps.push(new Map(this.p, images.map.TestMap1, 45, 2));
        this.maps.push(new Map(this.p, images.map.TestMap2, 33, 2));
        this.maps.push(new Map(this.p, images.map.TestMap3, 36, 2));
        this.currentMap = this.maps[this.selected];

        //Load graphics
        this.graphics = [];
        this.graphics.push(this.p.loadImage(images.map.Wall));          //0
        this.graphics.push(this.p.loadImage(images.map.DoorClosed));   //1
        this.graphics.push(this.p.loadImage(images.map.DoorOpen));     //2
        this.graphics.push(this.p.loadImage(images.map.LCorner));      //3
        this.graphics.push(this.p.loadImage(images.map.TCorner));      //4
        this.graphics.push(this.p.loadImage(images.map.XCorner));      //5
        this.graphics.push(this.p.loadImage(images.map.Pillar));        //6
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
        this.portal = this.p.createCanvas(this.portalWidth, this.portalHeight, this.p.WEBGL);
        this.portal.position(this.portalPos, 0);
        this.portal.background(0);

        //Set up camera
        this.map_cam = new Map_Cam(this.p, this.map_camRange);

        //Create entities
        //Top doors
        this.maps[0].addEntity(this.graphics[2],
                               this.p.createVector(7, 0),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[2],
                               this.p.createVector(8, 0),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        //Bottom Doors
        this.maps[0].addEntity(this.graphics[1],
                               this.p.createVector(7, 23),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[1],
                               this.p.createVector(8, 23),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        //Pillars
        this.maps[0].addEntity(this.graphics[6],
                               this.p.createVector(2, 5),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[6],
                               this.p.createVector(2, 9),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[6],
                               this.p.createVector(2, 14),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[6],
                               this.p.createVector(2, 18),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[6],
                               this.p.createVector(13, 5),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[6],
                               this.p.createVector(13, 9),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[6],
                               this.p.createVector(13, 14),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[6],
                               this.p.createVector(13, 18),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        //Corners
        this.maps[0].addEntity(this.graphics[3],
                               this.p.createVector(0, 0),
                               "W",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[3],
                               this.p.createVector(15, 0),
                               "N",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[3],
                               this.p.createVector(0, 23),
                               "S",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        this.maps[0].addEntity(this.graphics[3],
                               this.p.createVector(15, 23),
                               "E",
                               this.maps[0].minX,
                               this.maps[0].minY,
                               this.maps[0].tileSize);
        //Side walls
        for(let i = 1; i < 23; i++){
            this.maps[0].addEntity(this.graphics[0],
                                   this.p.createVector(0, i),
                                   "E",
                                   this.maps[0].minX,
                                   this.maps[0].minY,
                                   this.maps[0].tileSize);
            this.maps[0].addEntity(this.graphics[0],
                                   this.p.createVector(15, i),
                                   "E",
                                   this.maps[0].minX,
                                   this.maps[0].minY,
                                   this.maps[0].tileSize);
        }
        //Left walls
        for(let i = 1; i < 7; i++){
            this.maps[0].addEntity(this.graphics[0],
                                   this.p.createVector(i, 0),
                                   "N",
                                   this.maps[0].minX,
                                   this.maps[0].minY,
                                   this.maps[0].tileSize);
            this.maps[0].addEntity(this.graphics[0],
                                   this.p.createVector(i, 23),
                                   "M",
                                   this.maps[0].minX,
                                   this.maps[0].minY,
                                   this.maps[0].tileSize);
        }
        //Right walls
        for(let i = 9; i < 15; i++){
            this.maps[0].addEntity(this.graphics[0],
                                   this.p.createVector(i, 0),
                                   "N",
                                   this.maps[0].minX,
                                   this.maps[0].minY,
                                   this.maps[0].tileSize);
            this.maps[0].addEntity(this.graphics[0],
                                   this.p.createVector(i, 23),
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
        this.p.background(0);

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
        if(this.p.keyIsDown(this.p.UP_ARROW) && !this.p.keyIsDown(16)){
            this.map_cam.translate("UP");
        }
        if(this.p.keyIsDown(this.p.DOWN_ARROW) && !this.p.keyIsDown(16)){
            this.map_cam.translate("DOWN");
        }
        if(this.p.keyIsDown(this.p.LEFT_ARROW) && !this.p.keyIsDown(16)){
            this.map_cam.translate("LEFT");
        }
        if(this.p.keyIsDown(this.p.RIGHT_ARROW) && !this.p.keyIsDown(16)){
            this.map_cam.translate("RIGHT");
        }

        //Rotation
        if(this.p.keyIsDown(this.p.LEFT_ARROW) && this.p.keyIsDown(16)){
            this.map_cam.viewerAngle -= this.map_cam.viewerRotSpeed;
        }
        if(this.p.keyIsDown(this.p.RIGHT_ARROW) && this.p.keyIsDown(16)){
            this.map_cam.viewerAngle += this.map_cam.viewerRotSpeed;
        }

        //Scale
        if(this.p.keyIsDown(this.p.UP_ARROW) && this.p.keyIsDown(16)){
            //Scale down
            this.map_cam.viewerRange -= this.map_cam.viewerScaleSpeed;

            //Clamp
            if(this.map_cam.viewerRange < this.map_cam.minScale){
                this.map_cam.viewerRange = this.map_cam.minScale;
            }
        }
        if(this.p.keyIsDown(this.p.DOWN_ARROW) && this.p.keyIsDown(16)){
            //Scale up
            this.map_cam.viewerRange += this.map_cam.viewerScaleSpeed;

            //Clamp
            if(this.map_cam.viewerRange > this.map_cam.maxScale){
                this.map_cam.viewerRange = this.map_cam.maxScale;
            }
        }

        //Change map
        if(this.p.keyIsDown(49)){
            //Switch to map 1
            this.currentMap = this.maps[0];
        }
        if(this.p.keyIsDown(50)){
            //Switch to map 2
            this.currentMap = this.maps[1];
        }
        if(this.p.keyIsDown(51)){
            //Switch to map 3
            this.currentMap = this.maps[2];
        }
        
        //Currently not working
        //Orthographic mode has clipping problems
        //Change perspective
        //        if(this.p.keyIsDown(79)){
        //            //Switch to orthographic mode
        //            ortho();
        //        }
        //        if(this.p.keyIsDown(80)){
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
        this.portalWidth = (this.p.windowWidth / 100) * this.portalWidthPercentage;
        this.portalHeight = (this.p.windowHeight / 100) * this.portalHeightPercentage;

        //Recalculate position
        this.portalPos = (this.p.windowWidth - this.portalWidth) / 2;

        //Resize/Reposition canvas
        this.p.resizeCanvas(this.portalWidth, this.portalHeight);
        this.portal.position(this.portalPos, 0);
    }
}
