<template>
  <div id="app">
    <TheHeader />
    <main id="main-view">
      <transition mode="out-in">
        <div class="container">
          <router-view />
        </div>
      </transition>
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

<style lang="scss">
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
  font-family: $font-family, sans-serif;
  color: map-get($color, _text);
  background: url("./assets/pattern.svg") repeat top;
}

a {
  color: map-get($color, _text);
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
  padding: 0 rem(24);
  margin: 0 auto;
  max-width: 100%;
}

main {
  flex: 1;
}

.btn {
  display: block;
  padding: rem(10) rem(30);
  background-color: map-get($color, _purple);
  border-radius: rem(4);
  text-align: center;
  font-size: $font-size;
  box-shadow: 0 rem(4) rem(8) map-get($color, _shadow);
  font-family: $font-family;
  color: #fff;
  transition: all 0.3s;
  border: none;

  &:hover {
    background-color: map-get($color, _purple_2);
    transform: scale(1.1);
  }
}


input,
textarea {
  border-radius: rem(4);
  border: 1px solid #fff;
  padding: rem(15);
  box-shadow: 0 rem(4) rem(8) map-get($color, _shadow);
  transition: all .3s;
  font-size: $font-size;
  font-family: $font-family;
  margin-bottom: rem(15);
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 rem(6) rem(12) map-get($color, _shadow);
  border-color: map-get($color, _purple_2);
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
