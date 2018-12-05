import Vue from 'vue'
import App from './App.vue'

export var bus = new Vue({
  methods:{
    actualizarContador(cantTareas){
      this.$emit('incrementarContador', cantTareas);
    },
    decrementarContador(){
      this.$emit('decrementarContador');
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
