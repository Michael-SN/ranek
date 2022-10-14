<template>
  <div class="login">
    <h2>Login</h2>
    <form action="">
      <label for="email">Email</label>
      <input type="text" name="email" id="email" autocomplete="username" v-model="login.email">
      <label for="password">Senha</label>
      <input type="password" name="password" id="password" autocomplete="current-password" v-model="login.password">
      <button class="btn" @click.prevent="logon">Logar</button>
      <ErrorNotify :errors="errors" />
    </form>
    <div class="lost-pass">
      <small>
        Esqueceu sua senha? <a href="http://backend-ranek.local/wp-login.php?action=lostpassword">Clique aqui.</a>
      </small>
    </div>
    <SignUp />
  </div>
</template>

<script>
import SignUp from '@/components/Signup.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        password: ""
      },
      errors: []
    }
  },
  components: {
    SignUp,
  },
  methods: {
    logon() {
      this.errors = []
      // eslint-disable-next-line no-unused-vars
      this.$store.dispatch('loginUser', this.login).then(response => {
        this.$store.dispatch("getUser")
        this.$router.push({ name: "user" })
      }).catch(error => {
        console.log(error.response.data.message)
        this.errors.push(error.response.data.message)
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 rem(20);

  h2 {
    text-align: center;
    font-size: rem(32);
    margin-top: rem(40);
    color: map-get($color, _purple);
  }

  form {
    display: grid;

    .btn {
      width: 100%;
      max-width: 300px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .lost-pass {
    text-align: center;
    margin: rem(20) auto 0 auto;


    a {
      font-weight: bold;
      color: map-get($color, _purple);

      &:hover {
        text-decoration: underline;
      }
    }

  }
}
</style>