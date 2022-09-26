<template>
  <div>
    <template v-for="(dados, index) in usuarios" :key="index">
      <h5 v-if="dados.id >= 1 && dados.id <= 4"> {{dados}}</h5>
    </template>
    <hr>
    <button @click="increment">Add</button>
    {{count}}
    <button @click="deleter">Delete</button>
    <hr>
    <Counter/>
    <hr>
  </div>
</template>
    
<script>
  import Counter from '@/components/Counter.vue'
 import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
 export default {
  name: 'Pagg3Vue',
  data() {
    return {
      usuarios: [],
      count: 0
    }
  },
  components:{
    Counter
  },
  created() {
    fetch('http://localhost:3000/produtos')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.usuarios = data
      })
  },
  methods: { //methods ou actions
    ...mapActions([]),
    ...mapMutations([]),
    increment(){
      this.count++;
    },
    deleter(){
      this.count--;
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters([]),
    
  }
}
</script>
    