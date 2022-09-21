<template>
    <div>
        <template v-for="(dados, ini) in users" :key="ini">
            <li v-if="users">{{dados.nome}}{{dados.id}}{{dados.sobrenom}}{{dados.numero}}</li>
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