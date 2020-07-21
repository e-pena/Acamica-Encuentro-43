const moment = require('moment');
const images = require('./images.js');
const logger = require('./logger.js');

let imagenes = images.mostrarURLImagenes();
let time = moment(new Date()).format('YYYY/MM/DD hh:mm:ss');

function crearArchivo(fotos, tiempo) {
	// logger.crearLog();
	for (let i = 0; i < fotos.length; i++) {
		const element = fotos[i];
		logger.agregarTexto(element);
	}
	logger.agregarTexto(tiempo);
}

crearArchivo(imagenes, time);
