<template>
  <div>
    <UserForm>
      <button @click.prevent="updatUser" class="btn">Atualizar Usuário</button>
    </UserForm>
    <ErrorNotify :errors="errors" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import { api } from '@/axios';

export default {
  nmae: "UserEdit",
  data() {
    return {
      errors: []
    }
  },
  components: {
    UserForm,
  },
  methods: {
    updatUser() {
      this.errors = []
      api.put("/user")
        .then(() => {
          this.$store.dispatch("getUser")
          this.$router.push({ name: 'user' })
        }).catch(error => {
          console.log(error.response.data.message)
          this.errors.push(error.response.data.message)
        })
    }
  },
}
</script>