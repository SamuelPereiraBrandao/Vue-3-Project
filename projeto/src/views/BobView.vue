<template>

    <hr>
    <div>
        <template v-for="(dad, inicio) in users" :key="inicio">
            <spam v-if="dad">{{dad.id}} | {{dad.nome}} | {{dad.sobrenome}} | {{dad.numero}} <button @click="removervoce(dad)">remover</button><br></spam>
        </template>
    </div>
</template>
  
<script>

export default {
    name: 'BobVue',
    data() {
        return {
            users: [
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
    methods: {
        remove(users){
            const index = this.users.findIndex((i) => {
                return i.id == users.id
            })
            this.users.splice(index,1)
            console.log(index)
        },
        removervoce(users){
           const index = this.users.findIndex((i) => {
            return i.id == users.id
           })
           this.users.splice(index, 1)
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