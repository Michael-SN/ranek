<template>
  <div>
    <!-- {{ $store.state.user }} -->
    <form>
      <div class="user-data" v-if="showDataLogin">
        <label for="name">Nome</label>
        <input id="name" name="name" type="text" v-model="name">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" autocomplete="username" v-model="email">
        <label for="password">Senha</label>
        <input id="password" name="password" type="password" autocomplete="current-password" v-model="password">
      </div>
      <label for="cep">Cep</label>
      <input id="cep" name="cep" type="text" v-model="cep" @keyup="fillCep">
      <label for="street">Rua</label>
      <input id="street" name="street" type="text" v-model="street">
      <label for="number">Numero</label>
      <input id="number" name="number" type="text" v-model="number">
      <label for="district">Bairro</label>
      <input id="district" name="district" type="text" v-model="district">
      <label for="city">Cidade</label>
      <input id="city" name="city" type="text" v-model="city">
      <label for="state">Estado</label>
      <input id="state" name="state" type="text" v-model="state">
      <div class="button">
        <slot></slot>
      </div>
    </form>
  </div>
</template>

<script>
import { mapFields } from '@/helpers/mapFields.js'
import { viaCEP } from "@/axios/index.js"

export default {
  name: "UserForm",
  computed: {
    ...mapFields({
      fields: ["name", "email", "password", "cep", "street", "number", "district", "city", "state"],
      base: "user",
      mutation: "UPDATE_USER"
    }),
    showDataLogin() {
      return (!this.$store.state.login || this.$route.name == 'user-edit')
    }
  },
  methods: {
    fillCep() {
      const cep = this.cep.replace(/\D/g, "")
      if (cep.length === 8) {
        viaCEP(cep)
          .then(res => {
            // console.table(res.data)
            this.street = res.data.logradouro
            this.city = res.data.localidade
            this.state = res.data.uf
            this.district = res.data.bairro
          })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
form,
.user-data {
  display: grid;
  grid-template-columns: rem(80) 1fr;
  align-items: center;

  .user-data {
    grid-column: 1 / 3;
  }

  .button {
    grid-column: 2;
  }
}
</style>