<template>
    <div class="panel" >
        <div class="row panel-vista  panel-body" >
            <div class="col-md-6 " >
                <div class=" panel-foto ...">
                    <img class=" foto-pelicula ..." :src="moovieData.url_imagen" >
                </div>
            </div>
            <div class="col-md-6" >
                <h2>
                    {{moovieData.nombre}}
                </h2><br/>
                <p>
                    {{moovieData.descripcion.slice(0, 500) }} ...
                </p>

            {{ moovieData.created_at  }}
            </div> 
        </div>
        <div class="row" ><br/>
            <div class="col-md-12" >
            <br/>
                <div>   
                 
                    <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"><br/>
                        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                            <label for="comment" class="sr-only">Tu resena</label>
                            <textarea id="comment" rows="3" v-model="dataResena.comentario" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Escribe tu reseña ..." required></textarea>
                        </div>
                        <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                           
                            <div class="flex pl-0 space-x-1 sm:pl-2">
                                
                                <button type="button" v-on:click="newResena()" class="inline-flex justify-center items-center p-2 text-blue-500 rounded cursor-pointer hover:text-lblue-900 hover:bg-blue-100 dark:text-blue-400 dark:hover:text-white dark:hover:bg-blue-600">
                                     <svg class="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                                    </svg>
                                    <span class="sr-only">Enviar </span>
                                </button>
                            </div>
                        </div>
                        <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                            
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Califica la pelicula</label>
                                <select id="countries" v-model="dataResena.calificacion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Escoge un puntaje</option>
                                    <option value="1">★</option>
                                    <option value="2">★★</option>
                                    <option value="3">★★★</option>
                                    <option value="4">★★★★</option>
                                    <option value="5">★★★★★</option>
                                </select>

                        </div>
                    </div>
                </div>

                <div v-if="resenas.length === 0" >
                    <h4>Aun no tiene reseñas esta pelicula</h4><br/><br/>
                </div>

                <div v-if="resenas.length != 0" class="panel-resenas panel panel-body" >
                    <div  v-for="resena, key in resenas" :key="key" >
                        <resena-component :resenaData="resena"   ></resena-component>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script> 

    import axios from 'axios';
    import swal from 'sweetalert2'; 
    import ResenaComponent from '../components/ResenaComponent.vue';
    
    export default {

        name:'MovieView',
        components: {
            ResenaComponent
        },
        mounted(){
            
            this.id_moovie = this.$route.params.id; 
            this.dataResena.pelicula_id = this.$route.params.id; 
            this.getMovie();
            this.getResenas();
        },
        data(){
            return {
                id_moovie : '',
                url_api : "http://localhost:3000/api/",
                resenas : [],
                moovieData : {
                    "descripcion" : "" ,
                    "id" : '',
                    "nombre" : "",
                    "url_imagen" : "",
                    "created_at": ""
                },
                dataResena : {
                    "pelicula_id" : "",
                    "comentario": "",
                    "calificacion" : 0
                }

            }
        },
        methods: { 
            newResena: async function(){
                try {
                    if(this.dataResena.comentario != ""){
                        console.log(this.dataResena)
                        await axios.post(this.url_api + 'resenas', this.dataResena).then( response => {
 
                            if (response.data.status === true) {
                                this.resenas = [];
                                this.getResenas();
                                this.dataResena = {
                                    "pelicula_id" : "",
                                    "comentario": "",
                                    "calificacion" : 0
                                }  

                                 swal.fire({ title:"Informacion agregada",
                                            text: response.data.text,
                                            icon: "success",
                                        });
                            }
                        })
                    }else{
                         swal.fire({
                                title: "error",
                                text: "Debe Enviarse un comentario",
                                icon: "warning"
                        });
                    }
                } catch (error) {
                        console.log(error)
                        swal.fire({
                                title: "error",
                                text: "" + error + "",
                                icon: "warning"
                        });
                }
            },
            getMovie : async function(){
                await axios.get(this.url_api + 'peliculas/' + this.$route.params.id).then( response => {
                    if(response.data.status === true){
                        let dataCome = response.data.data;
                        this.moovieData.descripcion = dataCome.descripcion;
                        this.moovieData.id = dataCome.id;
                        this.moovieData.nombre = dataCome.nombre; 
                        this.moovieData.url_imagen = dataCome.url_imagen;
                        this.moovieData.created_at = dataCome.created_at;

                        this.moovieData = dataCome;
                        
                   
                    }else{
                        swal.fire({
                            icon:"warning",
                            text:response.data.text
                        })
                    }
                })
            },
            getResenas : async function(){
                await axios.get(this.url_api + 'resenas/'+this.$route.params.id).then( response => {
                    if(response.data.status === true){ 
                        
                        this.resenas = response.data.data; 
                        
                    }else{
                        swal.fire({
                            icon:"warning",
                            text:response.data.text
                        })
                    }
                })
            }
        }

    }


</script>

<style>
    .foto-pelicula{
        width: 250px;
        height: 300px;
        margin-left: 20%;
    }   

    .panel-foto{
        text-align: center;

    }

    .panel-resenas{
        height: 400px;
        border:solid 1px inherit;
        overflow: auto; 
    }

    .panel-vista{
        height: 300px;
        border:solid 1px inherit;
        overflow: auto; 
    }
</style>