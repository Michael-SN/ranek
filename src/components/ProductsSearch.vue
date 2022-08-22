<template>
  <div>
    <form action="">
      <input type="text" name="search" id="search" v-model="search">
      <input type="submit" value="Search" id="lupa" @click.prevent="SearchProducts">
    </form>
  </div>
</template>

<script>
export default {
  name: "ProductsSearch",
  data() {
    return {
      search: ""
    }
  },
  computed: {

  },
  methods: {
    SearchProducts() {
      this.$router.push({ query: { q: this.search } })
    }
  },

}
</script>

<style scoped>
</style>