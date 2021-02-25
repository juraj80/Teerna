import { useEffect, useRef } from 'react';

export default function (domFn) {
	const domRef = useRef();
	useEffect(() => domFn(domFn.current));

	return <div ref={domRef} />;
}

// to use
// const MapBox = () => {
// 	const p5Fn = p5Ref => {
// 		const sketch = p => {
// 			p.setup = () => {
// 				p.createCanvas(500, 500);
// 				p.background(0);
// 			};
// 			p.draw = () => {
// 				p.fill(2255);
// 				p.ellipse(p.width / 2, p.height / 2, 400);
// 			};
// 		};
// 		new p5(sketch, p5Ref);
// 	};
// 	return <MapWrapper>{useDOMControl(p5Fn)}</MapWrapper>;
// };
