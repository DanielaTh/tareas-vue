<template>
    <div class="input-group">
        <input type="text" placeholder="Escribe una nueva tarea :)" v-model="nuevaTarea" class="form-control" v-on:keyup.enter="agregarTarea"/> 
        <span class="input-group-btn"><button v-on:click="agregarTarea" class="btn btn-primary">Agregar Tarea</button></span>
    </div>
</template>

<script>
import { bus } from './main.js'
export default {
    props:['tareas'],
    data(){
        return {
            nuevaTarea: ''
        }
    },
    methods:{
        agregarTarea(){
            var textoNuevo = this.nuevaTarea.trim();
            if(textoNuevo){
                this.tareas.push({
                    texto: textoNuevo,
                    terminada: false
                });  
                //this.$emit('incrementarContador', 1);      
                //bus.$emit('incrementarContador', this.tareas.length);
                bus.actualizarContador(this.tareas.length);
                this.nuevaTarea = '';        
            }
        }
    },
    created(){
        //bus.$emit('incrementarContador', this.tareas.length);
         bus.actualizarContador(this.tareas.length);
    }
}
</script>

