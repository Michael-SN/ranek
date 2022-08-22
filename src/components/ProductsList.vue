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
import { api } from "@/axios/index.js"

export default {
  name : "ProductsList",
  data() {
    return {
      products: null
    }
  },
  methods: {
    getProducts() {
      api.get("/product")        
      .then(res => {       
        console.log(res)   
        this.products = res.data
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