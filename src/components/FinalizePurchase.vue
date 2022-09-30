<template>
  <section>
    <h2>Endereço de Envio</h2>
    <UserForm>
      <button class="btn" @click.prevent="finishPurchase">Finalizar Compra</button>
    </UserForm>
  </section>
</template>

<script>
import { api } from "@/axios";
import { mapState } from "vuex";
import UserForm from "./UserForm.vue";
export default {
  name: "FinalizePurchase",
  props: ["product"],
  components: {
    UserForm,
  },
  computed: {
    ...mapState(["user"]),
    purchase() {
      return {
        buyer_id: this.user.email,
        seller_id: this.product.user_id,
        product: this.product,
        address: {
          cep: this.user.cep,
          street: this.user.street,
          number: this.user.number,
          district: this.user.district,
          city: this.user.city,
          state: this.user.state,
        },
      };
    },
  },
  methods: {
    createTransaction() {
      return api.post("/transaction", this.purchase).then(() => {
        this.$router.push({ name: "buy" });
      });
    },
    async createUser() {
      try {
        await this.$store.dispatch("createUser", this.$store.state.user);
        await this.$store.dispatch("getUser", this.$store.state.user.email);
        await this.createTransaction();
      } catch (error) {
        console.log(error);
      }
    },
    finishPurchase() {
      if (this.$store.state.login) {
        this.createTransaction();
      } else {
        this.createUser();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: rem(40);
  margin-bottom: rem(20);
}

.btn {
  background-color: map-get($color, _orange);
}
</style>
