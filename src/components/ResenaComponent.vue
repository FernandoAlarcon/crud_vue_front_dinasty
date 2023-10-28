<template>
  <div id="component-resena" >
    <div :id="resenaData.id" class="resena-panel">
        <hr/>
        
        <p>
            {{resenaData.comentario}}
        </p>
        <div class="star-rating">
            <a href="#" v-for=" a in parseInt(resenaData.calificacion)" :key="a" >★</a>    
        </div> 
        <br>
        <b>{{resenaData.created_at}}</b><br/>
        <button type="button" v-on:click="DeleteData(resenaData.id)"  class="  bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4  rounded-full 
                                                        inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <span class="sr-only">Enviar </span>
        </button>

    </div>
  </div>
</template>

<script lang="ts"> 

import swal from 'sweetalert2';
import axios from 'axios';
import { defineComponent } from "vue";

 
export default  defineComponent ({

   name: 'resena-component',
   props: {resenaData: Object },
   data():any{
    return {
        url_api : "http://localhost:3000/api",
        infoData : {}

    }
   }, 
   methods: {

        DeleteData: function(Data: any) :void{
                var URL_BASE = this.url_api + '/resenas/' + Data;
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
 
                    axios.delete(URL_BASE).then( response =>{
                            console.log('llego delete')
                        if(response.data.status == true){
                            //this.$emit('resetResenas');
                            swal.fire({ title: "Eliminaste un registro de la base de datos",
                                    icon: "success",
                            });  

                            var capa = document.getElementById(Data);   
                                capa.style.display = "none";   
                                capa.style.visibility = "hidden";
                        }
                    }).catch(error=>{
                        alert("Error "+error)
                    })
                    
                } else {
                    //swal("No se eliminara!");
                }
          });  
          },

   }
   
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.button-options{  

}

.resena-panel{
    width: 100%;
    height: auto;
    overflow: auto;
    border: inherit 1px solid ;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


.star-rating {
  $size: 20px;
  $normal: #95A5A6;
  $selected: #F39C12;
  
  display: inline-block;
  
  a {
    float: right;
    width: $size;
    height: $size;
    line-height: $size;
    font-size: $size;
    color: $normal;
    text-decoration: none;
    text-align: center;
    transition: color .3s;
    
    &:hover {
      color: $selected;
      
      & ~ a {
        color: $selected;
      }
    }
  }

}
</style>
