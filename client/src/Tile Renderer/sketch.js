//**********************//
//      VARIABLES       //
//**********************//
var map_renderer = 0;

//****************************//
//      PRELOAD OBJECTS       //
//****************************//
function preload() {
    //Create map renderer
    map_renderer = new Map_Renderer(60,50,500);
}

//******************//
//      SETUP       //
//******************//
function setup() {
    //Initialise map renderer
    map_renderer.init();
}

//**************************//
//      UPDATE AND DRAW     //
//**************************//
function draw() {
    //Update and draw map renderer
    map_renderer.update();
    map_renderer.draw();
}


//**************************************//
//      RESIZE THE WINDOW ELEMENTS      //
//**************************************//
function windowResized(){
    //Resize the map renderer
    map_renderer.resize();
}