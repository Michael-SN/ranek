<template>
  <div class="product-list" v-if="product">
    <router-link :to="{ name: 'product', params: { id: product.id } }" class="product-img">
      <img :src="product.photos[0].src" :alt="product.photos[0].title" v-if="product.photos">
      <small>Ver Produto</small>
    </router-link>
    <div class="info">
      <p class="price">{{ product.price | fullPrice }}</p>
      <h3 class="title">{{ product.name }}</h3>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["product"]
}
</script>

<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: rem(20);
  margin-bottom: rem(40);
  position: relative;

  .product-img {
    border-radius: rem(4);
    overflow: hidden;
    height: 100px;
  }

  .info {
    align-self: end;

    .title {
      margin: 0;
    }
  }
}
</style>