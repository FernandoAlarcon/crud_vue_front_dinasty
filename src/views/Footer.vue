<template>

<footer class="bg-dark rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.linkedin.com/in/fernando-alarcon-984687119/" class="mr-4 hover:underline md:mr-6 ">Fernando Alarcon</a>
        </li>
         
        <li>
            <a href="https://github.com/FernandoAlarcon/" class="hover:underline">Mi Repo </a>
        </li>
    </ul>
    </div>
</footer>

</template>

<script>

    export default { 
        name: 'footer-component'
    }

</script>

<style>
  footer{
    position:fixed;
    left:0px;
    bottom:-20px; 
    width:100%;
    background:#999;
  }   
</style>