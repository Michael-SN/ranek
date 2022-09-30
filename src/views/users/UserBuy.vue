<template>
  <section>
    <div v-if="purchases">
      <h2>Compras</h2>
      <div class="products-wrapper" v-for="(purchase, index) in purchases" :key="index">
        <ProductItem v-if="purchase.product" :product="purchase.product">
          <p class="seller"><span>Vendedor: </span>{{ purchase.seller_id }}</p>
        </ProductItem>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from '@/axios';
import ProductItem from '@/components/ProductItem.vue';
import { mapState } from 'vuex';
export default {
  name: "UserBuy",
  data() {
    return {
      purchases: null,
    }
  },
  components: {
    ProductItem,
  },
  computed: {
    ...mapState(["user", "login"])
  },
  methods: {
    getPurchases() {
      api.get(`transaction?buyer_id=${this.user.id}`)
        .then(res => {
          this.purchases = res.data
        })
    }
  },
  watch: {
    login() {
      this.getPurchases()
    }
  },
  created() {
    if (this.login) {
      this.getPurchases()
    }
  }
}
</script>

<style lang="scss" scoped>
.product-wrapper {
  margin-bottom: rem(40);
}

h2 {
  margin-bottom: rem(20);
}

.seller {
  span {
    margin-bottom: rem(20);
    color: map-get($color, _orange);
    font-weight: bold;
  }
}
</style>