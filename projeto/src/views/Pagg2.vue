<template>
    <div style="border: 1px solid; border-radius:10px; padding:10px">
        <template v-for="(dadoslogin, index) in dadosDoLogin" :key="index">
            <li v-if="dadoslogin" style="border: 1px solid; border-radius:10px; padding:5px; list-style-type: none;">
                {{dadoslogin.id}} | {{dadoslogin.login}} | {{dadoslogin.senha}}</li>
            <br>
        </template>
    </div>
    <div>
        <template v-for="(d, inicio) in dadosDoLogin" :key="inicio">
            <li v-if="d">{{d}}</li>

        </template> <br>
        <template v-for="(dos,inicioo) in dadosDoLogin" :key="inicioo">
            <spam v-if="dos">{{dos}}</spam>
        </template>
    </div>
</template>
  
<script>

export default {
    name: 'Pagg2Vue',
    data() {
        return {
            dadosDoLogin: [
                {
                    id: 1,
                    login: 'samuelpbrandao58@gmail.com',
                    senha: '123456',
                },
                {
                    id: 2,
                    login: 'samuelpbrandao5t43538@gmail.com',
                    senha: '123456'
                },
                {
                    id: 3,
                    login: 'sam5435u345elpbran453da43o55454358@gmail.com',
                    senha: '123456'
                },
                {
                    id: 4,
                    login: '43s5435amue4353lpbranda43543o58@gmail.com',
                    senha: '123456'
                },
                {
                    id: 5,
                    login: '5435543samu453elp43ra534534ndao58@gmail.com',
                    senha: '123456'
                },
            ]
        }

    }

}
</script>
  