<template>
  <div class="home">
    <h1>&#11088; Compre ou Venda &#11088;</h1>

    <ProductsSearch />
    <ProductsList />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductsList from '@/components/ProductsList.vue';
import ProductsSearch from '@/components/ProductsSearch.vue';

export default {
  name: "HomeView",
  components: {
    ProductsList,
    ProductsSearch
  },
};
</script>


<style lang="scss" scoped>
.home {
  margin-top: rem(40);

  h1 {
    text-align: center;
    color: map-get($color, _purple);
    font-size: rem(32);
  }
}
</style>