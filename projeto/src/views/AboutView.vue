<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <button @click="count++">ADD </button>
  <br>
  {{count}}
  <hr>
  Tabela
  <br>
  <template v-for="(dados, inicio) in dados" :key="inicio">
    <li v-if="dados">{{dados}}</li>
  </template>
  <hr>
  <button @click="mudar = true">aparecer</button>
  <button @click="mudar = false">desaparecer</button>
  <template v-if="mudar">
    <Modal>
      <template #header><h2>header</h2></template>
    </Modal>
  </template>
</template>
<script>
  import Modal from '@/views/Modal.vue'
export default {
  name: 'AboutView',
  components: {
    Modal
  },
  data() {
    return {
      mudar:false,
      count: 0,
      dados:
        [
          {
            dados1: 1,
            dados2: 2,
            dados3: 3,
            dados4: 'dados4',
          }
        ]

    }
  }
}
</script>