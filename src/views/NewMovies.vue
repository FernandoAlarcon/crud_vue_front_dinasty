<template>
  <div class="new_movies_style" > 
      <div class="row" >
        <div class="col-md-6" >
          <div class="form-group"  ><br/>
            <span   >Nombre Pelicula</span>
            <input id="name_movie" v-model="dataMovie.nombre" type="text" class="form-control" placeholder="Nombre Pelicula" />
          </div>
          <div class="form-group"  ><br/>
            <span   >Link Imagen</span>
            <input id="imagen_movie"  v-model="dataMovie.url_imagen"  type="text" class="form-control" placeholder="URL foto" />
          </div>
          <div class="form-group"  ><br/>
            <span   >Descripcion </span>
            <textarea id="descripcion"  v-model="dataMovie.descripcion"  class="form-control" placeholder="Descripcion ..." ></textarea>
          </div>
          <div class="form-group"><br/>
                  <button class="btn btn-warning" v-on:click="new_movie()" > Enviar </button>        
          </div>
        </div>
        <div class="col-md-6 panel-2" >

                <div class=" panel-foto ...">
                    <img v-if="dataMovie.url_imagen === ''" class="foto-pelicula" src="https://us.123rf.com/450wm/kanzefar/kanzefar1711/kanzefar171100010/89675401-pel%C3%ADcula-vieja-con-una-pel%C3%ADcula-sobre-un-fondo-oscuro.jpg?ver=6"  alt="..." /><br/>
                    <img v-if="dataMovie.url_imagen != ''"  class="foto-pelicula" :src="dataMovie.url_imagen"  alt="..." /><br/> 
                    <!-- <img class=" foto-pelicula ..." :src="moovieData.url_imagen" > -->
                </div>

          <h3>{{dataMovie.nombre}}</h3><br/>
          <p> {{dataMovie.descripcion}} </p>
        </div>
      </div> 
  </div>
</template>

<script>

import Swal from 'sweetalert2';
import axios from 'axios';  

export default {

  name:'new_movie',
  data(vm) {
      return {
        //swal : new Swal,
        dataMovie : {
            'nombre' : '',
            'descripcion' : '',
            'url_imagen' : ''
          }  
      }
  },
  props:{
    infoMovie:[]
  },
  methods: {
      new_movie: async function(){

          try {

            if(this.dataMovie.nombre  != "" && this.dataMovie.descripcion != "" ){
                
                await axios.post('http://localhost:3000/api/peliculas', this.dataMovie).then( response => {
                  if (response.data.status === true) {
                    Swal.fire({ title:"Informacion agregada",
                                icon: "success",
                            });
                    this.dataMovie = {
                      'nombre' : '',
                      'descripcion' : '',
                      'url_imagen' : ''
                    }  
                  }
                })

              }else{
                      Swal.fire({
                                title:"Error",
                                text: "campos vacios",
                                icon: "error",
                            });
              }

          } catch (error) {
                        Swal.fire({
                                title: "error",
                                text: "" + error + "",
                                icon: "warning"
                        });
          }

      }
  }
  
}
</script>


<style>

.panel-foto{
        text-align: center;

    }

.new_movies_style{

  height: auto;

}

div .row {
  border: 1px solid inherit;
}

  .panel-2{
    text-align: center;
  }
  .picture_movies{ 

    height: 400px;
    width: 250px;
  }

  .foto-pelicula{
        width: 250px;
        height: 300px;
        margin-left: 20%;
        border-radius: 15px;
        border:1px solid gray;
  }   
</style>
