<template>
    <div>
        <h2>{{ tituloMayusculas() }}</h2>  
        <h3> Tareas a hacer: {{numTareas}} </h3>  
    </div>
</template>

<script>
import { bus } from './main.js'
export default {
    props:{
        titulo:{
            required:true,
            type: String,
            default: 'tarea'
        }
    },
    data(){
        return {
            numTareas: 0
        }
    },
    methods:{
        tituloMayusculas(){
            return this.titulo.toUpperCase();
        }
    },
    created(){
        bus.$on('incrementarContador', (cantTareas)=>{
            this.numTareas = cantTareas;
        });
        bus.$on('decrementarContador',()=>{
            this.numTareas--;
        })
    }
}
</script>
