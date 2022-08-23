<template>
  <section id="products">
    <div class="products-content">
      <div class="products" v-if="products && products.length">
        <div v-for="(product, index) in products" :key="index" class="product">
          <router-link to="/">
            <img v-if="product.photos" :src="product.photos[0].src" :alt="product.photos[0].title">
            <p class="price">{{ product.price }}</p>
            <h2 class="title">{{ product.name }}</h2>
            <p>{{ product.description }}</p>
          </router-link>
        </div>
        <ProductPagination :productsTotal="productsTotal" :productsPerPage="productsPerPage" />
      </div>
      <div v-else-if="products && products.length === 0" class="no-result">
        <p>Busca sem resultados. Termo não encontrado.</p>
      </div>
      <div v-else>
        <LoadingPage />
      </div>
    </div>
  </section>
</template>

<script>
import ProductPagination from '@/components/ProductPagination.vue'
import { api } from "@/axios/index.js"
import { serialize } from "@/helpers/serialize.js"
import LoadingPage from './LoadingPage.vue'

export default {
  name: "ProductsList",
  data() {
    return {
      products: null,
      productsPerPage: 3,
      productsTotal: 0
    }
  },
  components: {
    ProductPagination,
    LoadingPage
  },
  computed: {
    url() {
      const query = serialize(this.$route.query)
      return `/product?_limit=${this.productsPerPage}${query}`;
    }
  },
  methods: {
    getProducts() {
      this.products = null
      api.get(this.url)
        .then(res => {
          this.productsTotal = Number(res.headers['x-total-count'])
          this.products = res.data
        })
        .catch((e) => {
          console.error('There has been a problem with your fetch operation:' + e.message);
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
.products-content {
  max-width: 1200px;
  margin: 0 auto;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.875rem;
  margin: 1.875rem;
}

.product {
  box-shadow: 0 4px 8px var(--shadow-box);
  padding: .625rem;
  background: #fff;
  border-radius: 4px;
  transition: all .3s;
}

.product:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 10px rgba(0, 0, 0, .2);
  position: relative;
  z-index: 1;
}

.product img {
  border-radius: 4px;
  margin-bottom: 1.25rem;
}

.title {
  margin-bottom: .625rem;
}

.price {
  color: var(--text-orange);
  font-weight: bold;
}

.no-result {
  padding: .8rem 0;
  text-align: center;
}
</style>