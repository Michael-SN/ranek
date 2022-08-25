<template>
  <div>
    <p>Pagina do Usuario</p>
    {{ $store.state.user.name }}
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "User"
}
</script>

<style lang="sass" scoped>

</style>