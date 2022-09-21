<template>
  <div>
    <button @click="openModal = true">Abrir modal</button>
    <button @click="openModal = false">Fechar modal</button>


    <template v-if="openModal">
      <Modal>
        <template v-slot:header>
          <h2>header modal</h2>
        </template>
        <template v-slot:footer>
          <h2>footer modal</h2>
        </template>
      </Modal>
    </template>
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
