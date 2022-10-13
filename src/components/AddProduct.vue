<template>
  <form action="" class="add-product">
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" v-model="product.name">
    <label for="price">Preço (R$)</label>
    <input id="price" name="price" type="number" v-model="product.price">
    <label for="photos">Fotos</label>
    <input id="photos" name="photos" type="file" multiple ref="photos">
    <label for="price">Descrição</label>
    <textarea id="description" name="description" v-model="product.description"></textarea>
    <input class="btn" type="button" value="Adicionar Produto" @click.prevent="addProduct">
  </form>
</template>

<script>
import { api } from '@/axios';

export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        name: "",
        price: "",
        description: "",
        photos: null,
        sold: "false"
      }
    }
  },
  methods: {
    formatProduct() {

      const form = new FormData();

      const files = this.$refs.photos.files

      console.log(files)

      for (let i = 0; i < files.length; i++) {
        form.append(files[i].name, files[i])
      }
      form.append('name', this.product.name)
      form.append('price', this.product.price)
      form.append('description', this.product.description)
      form.append('sold', this.product.sold)
      form.append('user_id', this.$store.state.user_id)

      return form
    },
    addProduct() {
      const product = this.formatProduct()
      api.post('/product', product)
        .then(() => this.$store.dispatch("getUserProducts"))
    },
  },
}
</script>

<style lang="scss" scoped>
.add-product {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: rem(60px);

  .btn {
    grid-column: 2;
  }
}
</style>