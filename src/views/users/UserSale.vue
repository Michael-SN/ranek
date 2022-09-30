<template>
  <section>
    <div v-if="sales">
      <h2>Vendas</h2>
      <div class="products-wrapper" v-for="(sale, index) in sales" :key="index">
        <ProductItem v-if="sale.product" :product="sale.product">
          <p class="buyer"><span>Comprador: </span>{{ sale.buyer_id }}</p>
        </ProductItem>
        <div class="delivery">
          <h3>Entrega:</h3>
          <ul v-if="sale.address">
            <li v-for="(value, key) in sale.address" :key="key">
              {{key}}: {{value}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from '@/axios';
import ProductItem from '@/components/ProductItem.vue';
import { mapState } from 'vuex';
export default {
  name: "UserSale",
  data() {
    return {
      sales: null,
    }
  },
  components: {
    ProductItem,
  },
  computed: {
    ...mapState(["user", "login"])
  },
  methods: {
    getSales() {
      api.get(`transaction?seller_id=${this.user.id}`)
        .then(res => {
          this.sales = res.data
        })
    }
  },
  watch: {
    login() {
      this.getSales()
    }
  },
  created() {
    if (this.login) {
      this.getSales()
    }
  }
}
</script>

<style lang="scss" scoped>
.products-wrapper {
  margin-bottom: rem(40);

  .delivery {
    display: grid;
    grid-template-columns: minmax(100px, 200px) 1fr;
    grid-gap: rem(20);
    margin-bottom: rem(60);
  }
}

h2 {
  margin-bottom: rem(20);
}

h3 {
  justify-self: end;
  margin: 0;
}

.buyer {
  span {
    margin-bottom: rem(20);
    color: map-get($color, _purple_2);
    font-weight: bold;
  }
}
</style>