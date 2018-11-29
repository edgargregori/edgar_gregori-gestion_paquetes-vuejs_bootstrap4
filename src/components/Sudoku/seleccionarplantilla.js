import { facil } from './facil.js';
import { intermedio } from './intermedio.js';
import { dificil } from './dificil.js';

export const seleccionarplantilla = {

	plantilla : {
		facil: facil,
		intermedio: intermedio,
		dificil: dificil
	},
	randomIntFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	},

	getRamdomBoardFor(array) {
	  var idx = this.randomIntFromInterval(0, array.length - 1);
	  return array[idx];
	},
	
	randomBoard(difficulty) {
	  switch (difficulty) {
	    case 'easy':
	      return this.getRamdomBoardFor(this.plantilla.facil);
	    case 'medium':
	      return this.getRamdomBoardFor(this.plantilla.intermedio);
	    case 'hard':
	      return this.getRamdomBoardFor(this.plantilla.dificil);
	  }
	}
}
