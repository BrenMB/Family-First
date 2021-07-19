<template>
  <div id="grid">
    <section class="d-flex align-center justify-center">
      <h1 id="title" class="text-center">Register user</h1>
    </section>
    <section class="text-center">
      <v-avatar class="justify-center" color="indigo">
        <v-icon dark> mdi-account-circle </v-icon>
      </v-avatar>

      <div class="text-center">
        <v-text-field
          class="inputs mx-auto"
          label="First name"
          v-model="firstName"
        />
        <!-- este atributo v-model,  es el que modifica la variable data en script -->

        <v-text-field
          class="inputs mx-auto"
          label="Last name"
          v-model="lastName"
        />

        <v-text-field
          class="inputs mx-auto"
          label="Phone number"
          v-model="phoneNumber"
        />

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

        <v-btn rounded color="primary" class="px-6" @click="createAnAccount">
          SAVE
        </v-btn>
      </div>
    </section>
  </div>
</template>
<!--div class="signUp">
    <v-avatar class="justify-center" color="indigo" >
      <v-icon dark> mdi-account-circle </v-icon>
    </v-avatar>
    <router-link to="/">go home</router-link-->
<script>
import client from "../services/apiRestClient";

export default {
  name: "Signup",
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "brenda@gmail.com",
      pwd: "",
      show1: false,
      errorMessage: "",
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    createAnAccount() {
      const data = client.signUp(
        this.firstName,
        this.lastName,
        this.phoneNumber,
        this.email,
        this.pwd
      );
      if (data.error) {
        this.errorMessage = data.error;
      } else {
        window.location.href = "/child"; // cambiar a vue router
      }
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
