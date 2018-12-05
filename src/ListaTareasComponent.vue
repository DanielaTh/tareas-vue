<template>
    <ul class="list-group">
        <li v-for="(tarea,index) in tareas" class="list-group-item" v-bind:class="{terminada: tarea.terminada}">
            {{ tarea.texto }}
            <span class="float-right">
                <button type="button" class="btn btn-success fas fa-check" v-on:click="tarea.terminada = !tarea.terminada" ></button>
                <button type="button" class="btn btn-danger fas fa-times" v-on:click="eliminarTarea(index)" ></button>
            </span>
        </li>        
    </ul>
</template>

<script>
import { bus } from './main.js'
export default {
    props:['tareas'],
    methods:{
        eliminarTarea(index){
            this.tareas.splice(index,1);            
            //this.restarContador();
            bus.decrementarContador();
        }
    }
}
</script>

<style>
    .terminada{
        color:grey;
        text-decoration: line-through;
    }
</style>


