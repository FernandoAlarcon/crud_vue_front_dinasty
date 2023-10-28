<template>
  <div class="home">
      <table class="table table-report sm:mt-2">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Nombre
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Descripcion
                                    </th>
                                    <!-- <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Foto
                                    </th> -->
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Reseñas
                                    </th> 
                                    <th scope="col-3" class="relative px-6 py-3">
                                        ACCIONES
                                    </th>
                                      <!-- <th>
                                        <button class=" bg-yellow-500 
                                                        hover:bg-yellow-700 
                                                        text-white 
                                                        font-bold 
                                                        h-10 w-10 flex items-center justify-center
                                                        border-yellow-700 
                                                        rounded-full
                                                        "
                                                        v-on:click="AbrirModalCrear()"
                                                        title="Nuevo registro">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bookmark-plus" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/>
                                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                                </svg>
                                        </button> 
                                    </th>   -->
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">

                                <tr v-for=" moovie, index in moovies" :key="index" >
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{moovie.nombre}}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{moovie.descripcion }}
                                    </td>
                                    <!-- <td class="px-6 py-4 whitespace-nowrap">
                                        <img  class="picture_movies" :src="moovie.url_imagen"  alt="..." /><br/> 
                                    </td> -->
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        {{moovie.resenas}}
                                    </td> 
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> 
                                        <button 
                                          v-on:click="DeleteData(moovie)" 
                                            class="  bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4  rounded-full 
                                                    inline-flex items-center">
                                            
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 16 16">
                                                    <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
                                                </svg>
                                                <span>Eliminar</span>
                                        </button> 
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> 
                                        <button  
                                            v-on:click="AbrirModal(moovie)"
                                            class="  bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4  rounded-full 
                                                    inline-flex items-center">
                                            
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brush-fill" viewBox="0 0 16 16">
                                                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 0 1-3.078.132 3.658 3.658 0 0 1-.563-.135 1.382 1.382 0 0 1-.465-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"/>
                                                </svg>
                                                <span>Editar</span>
                                        </button> 
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> 
                                      <router-link :to="'/moovie/'+moovie.id" >
                                        <button 
                                            class="  bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4  rounded-full 
                                                    inline-flex items-center">
                                            
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                                </svg> 
                                        </button> 
                                      </router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

              <div> 
            <div v-if="showModal" 
                class="div-modal-primary overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                <div class=" relative w-auto my-6 mx-auto max-w-6xl">
                    <!--content-->
                    <div class="modal-panel border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        
                        <!--header-->
                        <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                            <p class="text-2xl font-semibold">
                                Editar 
                            </p>
                            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
                              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  ×
                              </span>
                            </button>
                        </div>

                        <!--body-->
                        <div class="body-modal relative p-6 flex-auto">
                            <form class="w-full max-w-lg">

                                <div class=" panel-foto ... flex flex-wrap -mx-3 mb-6">
                                    <img class=" foto-pelicula ..." :src="dataMovie.url_imagen" >
                                </div>
                                 
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                            url foto
                                        </label>
                                        <input  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-first-name"
                                                type="text"
                                                placeholder="URL imagen"  
                                                v-model="dataMovie.url_imagen"
                                                required /> 
                                    </div>
                                </div> 
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                            Nombre
                                        </label>
                                        <input  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-first-name"
                                                type="text"
                                                placeholder="nombre"  
                                                v-model="dataMovie.nombre"
                                                required /> 
                                    </div>
                                </div> 
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">
                                       
                                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Descripcion
                                    </label>
                                    <textarea id="message" v-model="dataMovie.descripcion" rows="4" 
                                    class="appearance-none block w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Descripcion..."></textarea>

                                    </div>
                                </div> 

                            </form> 
                        </div>
                        <!--footer-->
                        <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                            
                            <button class=" text-orange-500 bg-transparent border border-solid border-orange-500 hover:bg-orange-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" 
                                    type="submit"
                                    style="transition: all .15s ease"  
                                    v-on:click="UpdateData()">

                                    Actualizar
                            </button>  
                            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" v-on:click="toggleModal()">
                                    Cerrar
                            </button>
                            
                        </div>
 
                    </div>
                    <!--end content-->
                </div>
            </div>
            <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    </div> 
</template>

<script lang="ts"> 
import axios from 'axios';
import swal from 'sweetalert2';
import { defineComponent } from "vue";

export default defineComponent({
  
  rules: {
    "no-mixed-spaces-and-tabs": 0, // disable rule
  },
  name:'HomeView',
  data():any { 
        //swal : new Swal,
      return {
        url_api_peliculas : "http://localhost:3000/api/peliculas",
        moovies:[],
        dataMovie : {
            'id': '',
            'nombre' : '',
            'descripcion' : '',
            'url_imagen' : ''
          },
        showModal     : false,   
      }
    
  },
  mounted(){
      this.GetMovies();
  },
  methods: {
          toggleModal: function(){
                this.showModal = !this.showModal;
          },
          AbrirModal: function(data:any){

                this.showModal                    = !this.showModal; 
                this.dataMovie.id                 = data.id; 
                this.dataMovie.nombre             = data.nombre;
                this.dataMovie.descripcion        = data.descripcion;
                this.dataMovie.url_imagen         = data.url_imagen; 

          },
          GetMovies():any{ 
              var URL_BASE =  this.url_api_peliculas;
                  axios.get(URL_BASE).then( response => { 
                  if(response.data.status === true){
                    this.moovies = response.data.data
                  }
              })
          },
          DeleteData: function(Data: any){
                var URL_BASE = this.url_api_peliculas + '/';
                swal.fire({
                title: "Estas seguro ?",
                text: "Vas a eliminar un registro, perderas este registro",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: 'Si',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
                })
                .then((willDelete: any) => {
                if (willDelete.isConfirmed) {
                    let IdData = Data.id;
                        axios.delete(URL_BASE + IdData).then( response =>{
                       if(response.data.status == true){
                         this.GetMovies();
                          swal.fire({ title: "Eliminaste un registro de la base de datos",
                                icon: "success",
                          }); 
                       }
                    }).catch(error=>{
                        alert("Error "+error)
                    })
                    
                } else {
                    //swal("No se eliminara!");
                }
          });  
          },
          UpdateData: function(){
                
                var URL_BASE = this.url_api_peliculas + '/' + this.dataMovie.id;
                 swal.fire({
                 title: "Estas seguro de actualizar ?",
                 text: "Vas a actualizar, cambiaras este registro",
                 icon: "warning",
                 showCancelButton: true,
                 confirmButtonText: 'Si',
                 cancelButtonText: 'No, cancel!',
                 reverseButtons: true
                 })
                 .then((willUpdate:any) => {
                    if (willUpdate) { 
                          axios.put(URL_BASE, this.dataMovie).then(response=>{ 
                            
                              if( response.data.status === true ){

                                  this.GetMovies()

                                  this.dataMovie.id = '';
                                  this.dataMovie.nombre = '';
                                  this.dataMovie.descripcion = '';
                                  this.dataMovie.url_imagen = '';
                                    
                                  swal.fire({  title:"Actualizaste la base de datos",
                                            icon: "success", }); 
                              }else {
                                  swal.fire({  title:"Algo paso",
                                            icon: "warning", }); 
                              }

                          }).catch((error: any )=>{
                              alert("Error "+error)
                          })
                        
                    } else {
                        swal.fire({text:"No se eliminara!"});
                    }
                 });  

             },
  }
})
//export default class HomeView  {}
</script>

<style>

  .div-modal-primary{
    margin-bottom: 10px;
  }  

  .body-modal{
    width: 90%;
  }

  .foto-pelicula{
       width: 250px;
        height: 300px;
        margin-left: 20%;
  }  

  .modal-panel{
    width: 600px;
    align-items: center;
    justify-content:center;

  }

 .picture_movies{ 
    height: 250px;
    width: 125px;
  }

</style>
