P.onOrientationChange = function (callback) {
	// P.onOrientationChange (function (layout) {
	//   alert ("orientation is now "+ layout);
	// });
	var layout = undefined;
	var ow = window.innerWidth;
	const onResize = function () {
		var w = window.innerWidth;
		if (w != ow) {
			const lay = w>window.innerHeight?
				"landscape": "portrait";
			if (!layout || layout != lay) {
				callback (lay);
				layout = lay;
			}
			ow = w;
		}
		window.addEventListener ("resize", onResize);
	}
	window.addEventListener ("resize", onResize);
	onResize ();
}
