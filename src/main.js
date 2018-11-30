import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import Sudoku from './components/Sudoku/Sudoku.vue'
import Registro from './components/custom_events/Registro.vue'
//import App from './App.vue'
//import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap-vue/dist/bootstrap-vue.css"
//import "./src/components/Sudoku/boards.js"

//Vue.use(BootstrapVue)

new Vue({
  el: '#sudoku',
  //render: h => h(Sudoku)
  render: h => h(Registro)
})


