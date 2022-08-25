<template>
  <div>
    <form>
      <label for="name">Nome</label>
      <input id="name" name="name" type="text" v-model="name">
      <label for="email">Email</label>
      <input id="email" name="email" type="email" v-model="email">
      <label for="pass">Senha</label>
      <input id="pass" name="pass" type="password" v-model="pass">
      <label for="cep">Cep</label>
      <input id="cep" name="cep" type="text" v-model="cep">
      <label for="street">Rua</label>
      <input id="street" name="street" type="text" v-model="street">
      <label for="num">Numero</label>
      <input id="num" name="num" type="text" v-model="num">
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
export default {
  name: "UserForm"
}
</script>

<style lang="scss" scoped>
form {
  display: grid;
  grid-template-columns: rem(80) 1fr;
  align-items: center;

  .button {
    grid-column: 2;
  }
}
</style>