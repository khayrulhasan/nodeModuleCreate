var cusmodule  = require('./cusmodule');


var pdx = {
	number : 455,
	origin: 'pdx',
	destination: 'lax'
}

pl = cusmodule(pdx);

pl.triggerDepart();

console.log(pl.getInformation());

var aus = {
	number:44555,
	origin:'aus',
	destination:'cila'
}

ad = cusmodule(aus);

ad.triggerArrive();

console.log(ad.getInformation());

console.log(pl.getInformation());