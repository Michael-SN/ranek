<template>
  <div>
    <form action="">
      <input type="text" name="search" id="search" v-model="search" placeholder="Buscar...">
      <input type="submit" value="" id="lupa" @click.prevent="SearchProducts">
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

<style lang="scss" scoped>
form {
  max-width: 600px;
  margin: rem(30) auto rem(60) auto;
  position: relative;

  #search {

    width: 100%;
    padding: rem(20);

    &:focus,
    &:hover {
      transform: scale(1.1);
    }
  }

  #lupa {
    width: 62px;
    height: 62px;
    background: url("../assets/search.svg") no-repeat center center;
    cursor: pointer;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: unset;
  }
}
</style>