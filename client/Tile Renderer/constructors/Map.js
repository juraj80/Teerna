//************//
//    MAP     //
//************//
//Defines maps available to the renderer
class Map {
    //***********//
    //CONSTRUCTOR//
    //***********//
    constructor(filePath, gridsize, scale){
        //Import data
        this.map_image = loadImage(filePath);
        this.gridsize = gridsize;
        this.scale = scale;
        this.entities = [];
    }
    
    //***********//
    //INITIALISER//
    //***********//
    init(){
        //Calculate scale
        this.xScale = this.map_image.width * this.scale;
        this.yScale = this.map_image.height * this.scale;
        
        //Calculate bounds
        this.minX = 0 - (this.xScale / 2);
        this.minY = 0 - (this.yScale / 2);
        this.maxX = this.xScale / 2;
        this.maxY = this.yScale / 2;
        
        //Calculate grid
        this.tileSize = this.gridsize * this.scale;
        this.rows = floor(this.yScale / this.tileSize);
        this.columns = floor(this.xScale / this.tileSize);
    }

    //********//
    //DRAW MAP//
    //********//
    draw(target_canvas){
        //Render map
        image(this.map_image,
              this.minX,
              this.minY,
              this.xScale,
              this.yScale);
        
        //Render entities
        for(let i = 0; i < this.entities.length; i++){
            this.entities[i].draw();
        }
    }
    
    //**********//
    //ADD ENTITY//
    //**********//
    addEntity(graphic, coords, orientation, minX, minY, tileSize){
        this.entities.push(new Map_Entity(graphic, coords, orientation, minX, minY, tileSize));
    }
}