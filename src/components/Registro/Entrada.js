import { EventBus } from './Registro.js';

export default {
	name: 'entrada',
        mounted() {
            console.log('Component Input mounted.')
        },
	props: ['placeholder'],
 	 data() {
 	   return {
 	     input: ''
 	   };
 	 },
 	 methods: {
 	   monitorEnterKey() {
 	     EventBus.$emit('add-note', {
 	       note: this.input,
 	       timestamp: new Date().toLocaleString()
 	     });
 	     this.input = '';
 	   }
 	 }
}
