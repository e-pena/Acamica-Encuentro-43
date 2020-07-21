let coolImage = require('cool-images');

function mostrarURLImagenes() {
	let images = coolImage.many(600, 800, 3);
	for (let i = 0; i < images.length; i++) {
		const element = images[i];
		console.log(element);
	}
	return images;
}

module.exports = { mostrarURLImagenes };
