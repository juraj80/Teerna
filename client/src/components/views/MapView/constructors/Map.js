import { Map_Entity} from './Map_Entity';
//************//
//    MAP     //
//************//

//Defines maps available to the renderer
export class Map {
    //***********//
    //CONSTRUCTOR//
    //***********//
    constructor(p, filePath, gridsize, scale){
        this.p = p;
        //Import data
        this.map_image = this.p.loadImage(filePath);
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
        this.rows = this.p.floor(this.yScale / this.tileSize);
        this.columns = this.p.floor(this.xScale / this.tileSize);
    }

    //********//
    //DRAW MAP//
    //********//
    draw(target_canvas){
        //Render map
        this.p.image(this.map_image,
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
        this.entities.push(new Map_Entity(this.p, graphic, coords, orientation, minX, minY, tileSize));
    }
}