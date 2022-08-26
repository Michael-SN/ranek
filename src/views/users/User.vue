<template>
  <div class="user">
    <nav class="sidnav">
      <ul>
        <li>
          <router-link :to="{ name: 'user' }">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'buy' }">Compras</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'sales' }">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'user-edit' }">Editar Usuários</router-link>
        </li>
        <li>
          <button @click.prevent="logout">Fazer Logout</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "User",
  methods: {
    logout() {
      this.$store.dispatch("logoutUser")
      this.$router.push("/login")
    }
  },
}
</script>

<style lang="sass" scoped>

</style>