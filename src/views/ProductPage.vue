<template>
  <section>
    <div v-if="product" class="product">
      <ul>
        <li v-for="(photo, index) in product.photos" :key="index">
          <img :src="photo.src" :alt="photo.title">
        </li>
      </ul>
      <div class="info">
        <h1>{{ product.name }}</h1>
        <p class="price">{{ product.price | fullPrice }}</p>
        <p class="description">{{ product.description }}</p>
        <button class="btn" v-if="product.sold === 'false'">Comprar</button>
        <button v-else class="btn">Produto Vendido</button>
      </div>
    </div>
    <LoadingPage v-else />
  </section>
</template>

<script>
import { api } from '@/axios/index.js';

export default {
  name: "ProductPage",
  props: ["id"],
  data() {
    return {
      product: null
    }
  },
  methods: {
    getProduct() {
      api.get(`/product/${this.id}`)
        .then(res => {
          this.product = res.data
        })
    }
  },
  created() {
    this.getProduct()
  }

}
</script>

<style lang="scss" scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: rem(30);
  max-width: 900px;
  padding: rem(60) rem(20);
  margin: 0 auto;
}

.price {
  color: map-get($color, _orange);
  font-weight: bold;
  font-size: rem(24);
  margin-bottom: rem(40);
}

.description {
  font-size: rem(20);
}

button.btn {
  margin-top: rem(60);
  width: 200px;
}
</style>