import inputComponent  from './Input.vue';

export default {
  name: 'registro',
  data() {
	  return {
	notes: [],
    	timestamps: [],
    	placeholder: 'Enter a note'
	  }
  },
  components: {
    'input-component': inputComponent
  }
};
