<template>
  <div class="products-container">
    <div v-for="product in products" :key="product.id">
      <img v-if="product.photos" :src="product.photos[0].src" :alt="product.photos[0].title">
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }}</p>
      <p>{{ product.description }}</p>
    </div>
    {{ url }}
  </div>
</template>

<script>
import { api } from "@/axios/index.js"
import { serialize } from "@/helpers/serialize.js"

export default {
  name: "ProductsList",
  data() {
    return {
      products: null,
      productsPerPage: 9
    }
  },
  computed: {
    url() {
      const query = serialize(this.$route.query)
      return `/product?_limite=${this.productsPerPage}${query}`;
    }
  },
  methods: {
    getProducts() {
      api.get(this.url)
        .then(res => {
          this.products = res.data
        })
        .catch((e) => {
          console.error('There has been a problem with your fetch operation: ' + e.message);
        })
    }
  },
  watch: {
    url() {
      this.getProducts()
    }
  },
  created() {
    this.getProducts()
  }
}
</script>

<style scoped>
</style>