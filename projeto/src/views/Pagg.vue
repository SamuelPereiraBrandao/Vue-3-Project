<template>
   <div>
      <input type="checkbox"  value="Jack" v-model="checkedNames">
      <input type="checkbox"  value="John" v-model="checkedNames">
      <input type="checkbox" value="Mike" v-model="checkedNames">
      <br>
      <span>Checked names: {{ checkedNames }}</span>
      <br>
      <button @click="count++">CLICK {{count}}</button>
      <input type="number" placeholder="Digite algo" @keyup="add">
      <br><br>
      <input type="text" @keyup.enter="keyModifier()">
      <br><br>
      <input type="text" @keyup.enter="KeyKey()"> <br><br>
      {{status}}
      <br>
      <hr>
      <input type="text" @keyup.enter="Envv()"  v-model="vmodelo"> <br>
      {{status2}} <br>
      {{vmodelo}}
      <hr>
      <input type="checkbox"  @click="adds" value="Test1" v-model="oi">Teste1 <br>
      <input type="checkbox"  value="Test2" v-model="oi">Teste2 <br>
      <input type="checkbox"  value="Test3" v-model="oi">Teste3 <br>
      <input type="checkbox"  value="Test4" v-model="oi">Teste4 <br>
      <input type="checkbox"  value="Test5" v-model="oi">Teste5 <br>
      {{oi}} <br>
      {{status59}} <br>
      <input type="text" :placeholder="userName"><br><br>
      <template v-for="user in users" :key="user">
         <input type="checkbox" name="" id="" @click="userName = user.firstName"
            :checked="userName == user.firstName">{{user.firstName}} <br>
      </template>
      <select name="" id="" v-model="userName">
         <option :value="user.firstName" v-for="user in users" :key="user">{{user.firstName}}</option>

      </select>
      <br> <br><br>
      {{fullName}}
      <br><br>
      <ul>
         <template v-for="(use, index) in usese" :key="index">
            <li v-if="use.is_admin">Nome: {{use.firstName}} Admin: {{use.is_admin}}</li>
         </template>
         <br><br>
         <ul>
            <hr>
            <template v-for="(userrrr, inicio) in usese" :key="inicio">
               <li v-if="userrrr.is_admin">Nome: {{userrrr.firstName}} Admin: {{userrrr.is_admin}}</li>
            </template> <br>
            <hr>
            <template v-for="(dados, ini) in users" :key="ini">
               <li v-if="users">ID: {{dados.id}} | {{dados.firstName}} | {{dados.lastName}}</li>
            </template>
         </ul>
      </ul>
      <br>
      <hr>
      <template v-for="(dados, ini) in users" :key="ini">
         <li v-if="users">{{dados.id}}</li>
      </template>
   </div>
</template>
 
<script>
export default {

   name: 'PaggVue',
   computed: {
      fullName() {
         return this.users[0].firstName + ' ' + this.users[0].lastName
      }


   },
   el: '...',
   data() {
      return {
         userName: 'Selecione',
         status2:'Esperando envio',
         oi:[],
         vmodelo:'',
         status59:'Esperando',
         checkedNames:[],
         users: [
            {
               id: 1,
               firstName: 'Samuel',
               lastName: 'Pereira'
            },
            {
               id: 2,
               firstName: 'Maria',
               lastName: 'Pereira'
            },
            {
               id: 3,
               firstName: 'Roberta',
               lastName: 'Pereira'
            },
            {
               id: 4,
               firstName: 'Carla',
               lastName: 'Pereira'
            },
         ],
         usese: [
            {
               firstName: 'Samua',
               is_admin: 1
            },
            {
               firstName: 'Lele',
               is_admin: 0
            },
            {
               firstName: 'Jojo',
               is_admin: 1
            },

         ],
         count: 0,
         status: 'A ser enviado'
      }
   },
   methods: {
      adds(){
         if(this.oi == 'Test1'){
            this.status59 = 'Item errado'
         }else {
            this.status59 = 'Tudo certo!'
         }
      },
      add() {
         this.count += Number(event.target.value)
         console.log(event.target.value)
      },
      keyModifier() {
         alert('ENVIOU')
      },
      KeyKey() {
         if (this.status == 'Enviado') {

            this.status = 'Já foi enviado'
         } else {
            this.status = 'Enviado'
         }
      },
      Envv(){
    if (this.vmodelo == 'Codigo01'){
      this.vmodelo == 'Enviado com sucesso'
    }else {
      this.vmodelo == 'Codigo errado!'
    }
        
      }
   }

}
</script>
 