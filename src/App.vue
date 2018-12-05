<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo"></titulo>      
      <nueva-tarea :tareas="tareas" v-on:incrementarContador="numTareas += $event"></nueva-tarea>
      <lista-tareas :tareas="tareas"></lista-tareas>
    </div>
  </div>
</template>

<script>
import Titulo from './TituloComponent.vue'
import NuevaTarea from './NuevaTareaComponent.vue'
import ListaTareas from './ListaTareasComponent.vue'
export default {
  components:{
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  data(){
    return {
      titulo:'.: Lista de Tareas :.',
      tareas : [
         {
            texto: "Aprender Vue.js",
            terminada: false
        },
        {
            texto: "Aprender Angular.js",
            terminada: false
        },
        {
            texto: "Aprender React.js",
            terminada: false
        }
      ]  
    }
  }
}
</script>


