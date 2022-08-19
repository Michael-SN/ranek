<template>
  <header>
    <nav>
      <div class="container">
        <div class="navbar">
          <router-link to="/" class="logo">
            <img src="@/assets/ranek.svg" alt="Ranek" />
          </router-link>
          <router-link to="/login" class="btn">Vender | Login</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9375rem 0;
}

.logo {
  padding: 0.625rem 0;
}

.logo img {
  width: 90px;
  transition: all 0.3s;
}
.logo img:hover {
  transform: scale(1.1);
}
</style>