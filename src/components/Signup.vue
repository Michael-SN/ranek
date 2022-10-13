<template>
  <div class="sign-up">
    <h2>Cria seu Cadastro</h2>
    <transition mode="out-in">
      <button v-if="!create" class="btn btn-create" @click="create = true">Criar Conta</button>
      <UserForm v-else>
        <button class="btn btn-form" @click.prevent="createUser">Criar Usuário</button>
      </UserForm>
    </transition>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";

export default {
  name: "SignUp",
  data() {
    return {
      create: false
    }
  },
  components: {
    UserForm,
  },
  methods: {
    async createUser() {
      try {
        await this.$store.dispatch("createUser", this.$store.state.user)
        await this.$store.dispatch("loginUser", this.$store.state.user)
        await this.$store.dispatch("getUser")
        this.$router.push({ name: "user" })
      } catch (error) {
        console.log(error)
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.sign-up {
  h2 {
    text-align: center;
    margin-top: rem(40);
    margin-bottom: rem(10);
  }

  .btn {
    &.btn-create {
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }

    &.btn-form {
      max-width: 100%;
      width: 100%;
    }

  }
}
</style>
