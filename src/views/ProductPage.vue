<template>
  <section>
    <div v-if="product" class="product">
      <ul class="photos">
        <li v-for="(photo, index) in product.photos" :key="index">
          <img :src="photo.src" :alt="photo.title">
        </li>
      </ul>
      <div class="info">
        <h1>{{ product.name }}</h1>
        <p class="price">{{ product.price | fullPrice }}</p>
        <p class="description">{{ product.description }}</p>
        <transition mode="out-in" v-if="product.sold === 'false'">
          <button class="btn" v-if="!finish" @click="finish = true">Comprar</button>
          <FinalizePurchase v-else :product="product" />
        </transition>
        <button v-else class="btn btn-disabled" disabled>Produto Vendido</button>
      </div>
    </div>
    <LoadingPage v-else />
  </section>
</template>

<script>
import FinalizePurchase from '@/components/FinalizePurchase.vue'
import { api } from '@/axios/index.js';

export default {
  name: "ProductPage",
  props: ["id"],
  data() {
    return {
      product: null,
      finish: false
    }
  },
  components: {
    FinalizePurchase,
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

  .photos {
    grid-row: 1 / 3;

  }

  img {
    margin-bottom: rem(30);
    box-shadow: 0 4px 8px rgba(30, 60, 90, .2);
    border-radius: rem(4);
  }

  .info {
    position: sticky;
    top: rem(20);
  }
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