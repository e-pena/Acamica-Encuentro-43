const fs = require('fs');

function crearLog() {
	fs.writeFile('./log.txt', '', function (err) {
		if (err) {
			return console.log(err);
		}
		console.log('Archivo creado con éxito');
	});
}

function agregarTexto(input) {
	fs.stat('./log.txt', (err, stats) => {
		if (err) {
			return console.log(err);
		}
	});
	fs.appendFile('.log.txt', `\n${input}`, function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log('Archivo actualizado');
		}
	});
}

module.exports = { crearLog, agregarTexto };
