<template>
<div>
    <input type="text" v-model="dolar" placeholder="Dolar">
    <hr>
    <li>Dolar Hoje: </li>
    <li>{{dolar}} Dollars convertidos para Reais é: {{}}</li>
</div>
  </template>
    
  <script>
  // @ is an alias to /src
  
  export default {
    name: 'Pagg2Vue',
    data () {
        return{
            dolar:0
        }
    }
  }
  </script>
    