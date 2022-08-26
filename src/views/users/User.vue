<template>
  <div class="user">
    <nav class="sidenav">
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

<style lang="scss" scoped>
.user {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: rem(40) auto;
  grid-gap: rem(30);
  padding: rem(20);


  .sidenav {
    a {
      display: block;
      padding: rem(10);
      background-color: map-get($color, _bege);
      margin-bottom: rem(10);
      border-radius: rem(4);
    }

    a.router-link-exact-active,
    a:hover,
    button:hover {
      background-color: map-get($color, _purple);
      color: #fff;
    }

    button {
      border: none;
      width: 100%;
      font-size: $font-size;
      font-family: $font-family;
      text-align: left;
      border-radius: rem(4);
      padding: rem(10);
      cursor: pointer;
      background-color: map-get($color, _bege);
    }
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
}
</style>