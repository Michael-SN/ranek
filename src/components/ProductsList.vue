<template>
  <section id="products">
    <div class="products-content">
      <transition mode="out-in">
        <div class="products" v-if="products && products.length" key="products">
          <div v-for="(product, index) in products" :key="index" class="product">
            <router-link :to="{ name: 'product', params: { id: product.id } }">
              <img v-if="product.photos" :src="product.photos[0].src" :alt="product.photos[0].title">
              <p class="price">{{ product.price | fullPrice }}</p>
              <h2 class="title">{{ product.name }}</h2>
              <p>{{ product.description }}</p>
            </router-link>
          </div>
          <ProductPagination :productsTotal="productsTotal" :productsPerPage="productsPerPage" />
        </div>
        <div v-else-if="products && products.length === 0" class="no-result" key="no-results">
          <p>Busca sem resultados. Termo não encontrado.</p>
        </div>
        <div v-else key="loading">
          <LoadingPage />
        </div>
      </transition>
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
      productsPerPage: 9,
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

<style lang="scss" scoped>
.products-content {
  max-width: 1200px;
  margin: 0 auto;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: rem(30);
  margin: rem(30);
}

.product {
  padding: rem(10);
  background: #fff;
  border-radius: rem(4);
  transition: all .3s;
  box-shadow: 0 rem(4) rem(8) map-get($color, _shadow);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 rem(6) rem(10) rgba(0, 0, 0, .2);
    position: relative;
    z-index: 1;
  }

  img {
    border-radius: rem(4);
    margin-bottom: rem(20);
  }

  .title {
    margin-bottom: rem(10);
  }

  .price {
    color: map-get($color, _orange);
    font-weight: bold;
  }

  .no-result {
    padding: rem(12) 0;
    text-align: center;
  }
}
</style>