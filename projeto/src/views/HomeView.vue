<template>
  <div>
    <button @click="openModal = true">ABRIR NOTIFICAÇÃO</button>


    
      <Modal v-if="openModal" @close="openModal=false">
        
          <h2>MENSAGEM MODAL</h2>
      
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
    }
  }

}
</script>
