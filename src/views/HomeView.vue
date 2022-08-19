<template>
  <div class="home">
    <h1>&#11088; Compre ou Venda &#11088;</h1>

    <ProductsList  />
    <ProductsSearch/> 
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


<style scoped>

.home {
  margin-top: 2.5rem;
}

h1 {
  text-align: center;
  color: var(--bg-purple);
  font-size: 2rem;  
}
</style>