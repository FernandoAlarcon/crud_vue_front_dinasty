<template>
    <div>
        <h2>
            Aqui puedes ver todas nuestras Peliculas
        </h2><br>
        <div class="row grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-if="billboard.length === 0" >
                <p>
                    Aun no tienes peliculas disponibles
                </p>
                 
            </div> 
            <div class="col-md-3" v-for="(moovie, key) in billboard" :key="key"  >
                <router-link :to="'/moovie/'+moovie.id" >
                    <img class="image-billboard bg-purple max-w-full rounded-lg" :src="moovie.url_imagen" alt="" >
                    <b> {{moovie.nombre }} - </b>
                    <div v-if="moovie.resenas != 0" class="star-rating">
                        <a href="#" v-for=" a in parseInt(moovie.porcentaje)" :key="a" >★</a>    
                    </div>
                </router-link>
            </div>  
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import swal from 'sweetalert2';
    import { defineComponent } from "vue";

    export default defineComponent({
        name:'bill-board',
        data(){
            return{
                url_api_peliculas : "http://localhost:3000/api/peliculas",
                billboard: []
            }
        }, 
        mounted(){
            this.GetMoovies();
        },
        methods:{
            GetMoovies(){

                    axios.get(this.url_api_peliculas).then( response => {
                        if(response.data.status === true){
                            this.billboard = response.data.data
                            console.log(this.billboard)
                        }
                    })
            }
        }
    })

</script>

<style>

    .image-billboard{
        cursor:pointer;
        height: 320px;
        width: 100%;
    }

    .image-billboard:hoover{
        cursor:pointer;
        height: 325px;
        width: 105%;
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