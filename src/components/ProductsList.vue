<template>
  <div class="products-container">
    <div v-for="product in products" :key="product.id">
    <img v-if="product.photos"  :src="product.photos[0].src" :alt="product.photos[0].title">
    <h2>{{product.name}}</h2>
    <p>{{product.price}}</p>
    <p>{{product.description}}</p>
    </div>      
  </div>
</template>

<script>  
  export default {
    name : "ProductsList",
    data() {
      return {
        products: null
      }
    },
    methods: {
      getProducts() {
        fetch("http://localhost:3000/product")
        .then(res => res.json())
        .then(respJson => {          
          this.products = respJson
        })
        .catch((e)=> {
          console.error('There has been a problem with your fetch operation: ' + e.message);
        })
      }
    },    
    created() {
      this.getProducts()
    }
  }
</script>

<style scoped>

</style>