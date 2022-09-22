<template>
   <div>
      <template v-for="(dados, index) in users" :key="index">
         <li v-if="dados" style="border:1px solid black; border-radius:5px; padding:10px">
                     <img style="border-radius:10px; width:150px" :src="`${dados.url}`" alt="">
         </li> <br>
      </template>
   </div>
</template>
<script>
   
   //import _ from 'lodash'
   export default {
      data () {
         return {
            users:[]
         }
      },
      name:'HomeVue',
      created() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.users = data
      })
  },
      
   }
</script>