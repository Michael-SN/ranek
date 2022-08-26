<template>
  <div>
    <UserForm>
      <button @click.prevent="updatUser" class="btn">Atualizar Usuário</button>
    </UserForm>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import { api } from '@/axios';

export default {
  nmae: "UserEdit",
  components: {
    UserForm,
  },
  methods: {
    updatUser() {
      api.put(`/user/${this.$store.state.user.id}`, this.$store.state.user)
        .then(() => {
          this.$store.dispatch("getUser")
          this.$router.push({ name: 'user' })
        }).catch(error => {
          console.log(error)
        })
    }
  },
}
</script>

<style lang="scss" scoped>
</style>