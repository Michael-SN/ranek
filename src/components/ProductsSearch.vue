<template>
  <div>
    <form action="">
      <input type="text" name="search" id="search" v-model="search" placeholder="Research a product">
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

<style scoped>
form {
  max-width: 600px;
  margin: 1.875rem auto 3.75rem auto;
  position: relative;
}

form #search {
  width: 100%;
  padding: 1.25rem;
  /* border: none; */
}

#search:focus,
#search:hover {
  transform: scale(1.1);
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

/* #lupa:hover {
  transition: all .3s;
  transform: scale(1.1);
} */
</style>