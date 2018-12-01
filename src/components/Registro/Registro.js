import entrada  from './Entrada.vue';
import Vue from 'vue'

export const EventBus = new Vue();

const noteCountComponent = {
  template: `<div class="note-count">
      Note count: <strong>{{ noteCount }}</strong>
    </div>`,
  data() {
    return {
      noteCount: 0
    };
  },
  created() {
    EventBus.$on('add-note', event => this.noteCount++);
  }
};

export default {
  name: 'registro',
  data() {
	  return {
		usuarios: [],
    	timestamps: [],
    	placeholder: 'usuario / email',
	      actual: ''
	  }
  },
  created() {
    EventBus.$on('add-note', event => this.addNote(event));
  },
  methods: {
    addNote(event) {
      this.usuarios.push(event.note);
      this.timestamps.push(event.timestamp);

            //localStorage.currentGame = JSON.stringify(this.game);
	    console.log('event note' + event.note );
	    localStorage.actual = event.note;
	    this.actual = localStorage.actual;
	    console.log('storage user' + localStorage.user );

    }
  },
  components: {
    'entrada': entrada,
	'note-count-component': noteCountComponent
  }
};
