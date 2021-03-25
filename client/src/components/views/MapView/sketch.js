import { Map_Renderer } from './constructors/Map_Renderer';

export const sketch = (p) => {
	//**********************//
	//      VARIABLES       //
	//**********************//
	let map_renderer = 0;

	//****************************//
	//      PRELOAD OBJECTS       //
	//****************************//
	p.preload = () => {
		//Create map renderer
		map_renderer = new Map_Renderer(p, 100, 100, 500);
	};

	//******************//
	//      SETUP       //
	//******************//
	p.setup = () => {
		//Initialise map renderer
		map_renderer.init();
	};

	//**************************//
	//      UPDATE AND DRAW     //
	//**************************//
	p.draw = () => {
		//Update and draw map renderer
		map_renderer.update();
		map_renderer.draw();
	};

	//**************************************//
	//      RESIZE THE WINDOW ELEMENTS      //
	//**************************************//
	p.windowResized = () => {
		//Resize the map renderer
		map_renderer.resize();
	};
};
