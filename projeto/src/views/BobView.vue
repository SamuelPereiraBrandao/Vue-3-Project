<template>
    <div>
     <template v-for="(dados, inicio) in usuarios" :key="inicio">
        <li v-if="dados">{{dados.id}} | {{dados.nome}} <button @click="remover(inicio)">Remover</button></li>
     </template> <br><br>
     <button @click="addItem">add </button>
    </div>
    <br>
    <div>
        <input type="text" v-model="texto">
        <br>
        {{texto}}
    </div>
</template>
  
<script>

export default {
    name: 'BobVue',
    data () {
        return{
            texto:'',
            usuarios: [
                {
                    id: 1,
                    nome: 'Samuel',
                    sobrenome: 'Pereira',
                    numero: '11 95842-5624'
                },
                {
                    id: 2,
                    nome: 'Roberta',
                    sobrenome: 'Silva',
                    numero: '11 95842-5624'
                },
                {
                    id: 3,
                    nome: 'Maria',
                    sobrenome: 'Silva',
                    numero: '11 95842-5624'
                },
                {
                    id: 4,
                    nome: 'Jose',
                    sobrenome: 'Pereira',
                    numero: '11 95842-5624'
                },
            ]
        }
    },
    methods:{
        remover(inicio){
            this.usuarios.splice(inicio,1)
        },
        addItem(){
            this.usuarios.push(this.usuarios.nome = 'samu')
            console.log(this.usuarios)
        }

        
    },
    watch:{
        texto(Novovalor, Valorantigo){
            console.log('Novo:' +Novovalor)
            console.log('Antigo:' +Valorantigo)
        }
    }

}
</script>
<style scoped>
.my-class {
    border: 3px solid rgb(0, 255, 0);
    border-radius: 10px;
}

.class2 {
    border: 3px solid red;
    border-radius: 10px;
}
</style>