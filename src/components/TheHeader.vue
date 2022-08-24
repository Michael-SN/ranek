<template>
  <header>
    <nav>
      <div class="container">
        <div class="navbar">
          <router-link to="/" class="logo">
            <img src="@/assets/ranek.svg" alt="Ranek" />
          </router-link>
          <router-link v-if="$store.state.login" to="/login" class="btn">{{ name }}</router-link>
          <router-link v-else to="/login" class="btn">Vender | Login</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  computed: {
    name() {
      return this.$store.state.user.name.replace(/ .*/, "")
    }
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: rem(15) 0;
}

.logo {
  padding: rem(10) 0;
}

.logo {
  img {
    width: 100px;
    transition: all 0.3s;
  }
}
</style>