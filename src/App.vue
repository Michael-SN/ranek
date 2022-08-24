<template>
  <div id="app">
    <TheHeader />
    <main id="main-view">
      <div class="container">
        <router-view />
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style >
:root {
  /* Font family */
  --font-family: "Poppins", sans-serif;
  /* Colors and Background */
  --bg-purple: #87f;
  --bg-hover-purple: #65d;
  --text-primary: #345;
  --text-orange: #e80;
  --shadow-box: rgba(30, 60, 90, 0.2);
}

* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

body {
  font-family: var(--font-family), sans-serif;
  color: var(--text-primary);
  background: url("./assets/pattern.svg") repeat top;
}

a {
  color: var(--text-primary);
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: 100%;
}

main {
  flex: 1;
}

.btn {
  display: block;
  padding: 0.625rem 1.875rem;
  background-color: var(--bg-purple);
  border-radius: 0.25rem;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px var(--shadow-box);
  font-family: var(--font-family);
  color: #fff;
  transition: all 0.3s;
  border: none;
}

.btn:hover {
  background-color: var(--bg-hover-purple);
  transform: scale(1.1);
}


input,
textarea {
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 0.9375rem;
  box-shadow: 0 4px 8px var(--shadow-box);
  transition: all .3s;
  font-size: 1rem;
  font-family: var(--font-family);
  margin-bottom: 0.9375rem;
}


input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px var(--shadow-box);
  border-color: var(--bg-hover-purple);
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all .3s;
}
</style>
