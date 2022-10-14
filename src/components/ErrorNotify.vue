<template>
  <transition>
    <ul class="error" v-if="errors.length > 0">
      <li v-for="(error, index) in errors" :key="index" v-html="error"></li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: 'ErrorNotify',
  props: {
    errors: Array
  },
}
</script>

<style lang="scss" scoped>
.error {
  margin: rem(20) auto;

  li {
    color: #f05e1b;
    text-align: center;
  }
}
</style>