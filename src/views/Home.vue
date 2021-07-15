<template>
  <div id="grid">
    <section class="d-flex align-center justify-center">
      <h1 id="title" class="text-center">Your Family First</h1>
    </section>
    <section class="text-center">
      <img :src="require('../assets/home.png')" />
    </section>
    <div>
      <div class="text-center">
        <v-text-field class="inputs mx-auto" label="email" v-model="email" />

        <v-text-field
          class="inputs mx-auto"
          v-model="pwd"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="password"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-btn rounded color="primary" class="px-6" @click="login">
          log in
        </v-btn>
      </div>
      <div class="text-center my-6">
        <router-link to="/about">or create an account</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../services/api";

export default {
  name: "Home",
  data() {
    return {
      email: "",
      pwd: "",
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",

        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  methods: {
    login() {
      API.login(this.email, this.pwd);
    },
  },
};
</script>
<style lang="scss" scoped>
#grid {
  display: grid;
  height: 100vh;
  grid-template-rows: 7fr 25fr 10fr;
}
#title {
  font-size: 2em;
}
.inputs {
  width: 200px;
}
</style>
