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
		notes: [],
    	timestamps: [],
    	placeholder: 'Enter a note'
	  }
  },
  created() {
    EventBus.$on('add-note', event => this.addNote(event));
  },
  methods: {
    addNote(event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamp);
    }
  },
  components: {
    'entrada': entrada,
	'note-count-component': noteCountComponent
  }
};
