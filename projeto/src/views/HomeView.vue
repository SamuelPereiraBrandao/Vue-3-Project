<template>
  <div>
    <button @click="openModal = true">ABRIR NOTIFICAÇÃO</button>


    
      <Modal v-if="openModal" @close="openModal=false">
        <template v-for="(dados, index) in dadoscliente" :key="index">
          <spam v-if="dados"> ID: {{dados.id}} | NOME: {{dados.nome}} | SOBRENOME: {{dados.sobrenome}} | ADM: {{dados.is_admin}}</spam>
          <br>
        </template>
      
      
      </Modal>

  </div>
</template>

<script>
// @ is an alias to /src

import Modal from '@/views/Modal.vue'
export default {
  name: 'HomeView',
  components: {Modal},
  data() {
    return {
      openModal: false,
      dadoscliente:[
                {
                   id:1,
                nome:'Samuel',
                sobrenome:'Pereira',
                is_admin:0  
                },
                {
                   id:2,
                nome:'Samuel',
                sobrenome:'Pereira',
                is_admin:0  
                },
                {
                   id:3,
                nome:'Samuel',
                sobrenome:'Pereira',
                is_admin:0  
                },
                {
                   id:4,
                nome:'Samuel',
                sobrenome:'Pereira',
                is_admin:0  
                },
                {
                   id:5,
                nome:'Samuel',
                sobrenome:'Pereira',
                is_admin:0  
                },
                {
                   id:6,
                nome:'Samuel',
                sobrenome:'Pereira',
                is_admin:0  
                },
                {
                   id:7,
                nome:'Samuel',
                sobrenome:'Pereira',
                is_admin:0  
                },
                {
                   id:8,
                nome:'Samuel',
                sobrenome:'Pereira',
                is_admin:0  
                },
               
            ]
        
    }
  }

}
</script>
