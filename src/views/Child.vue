<template>
  <div id="grid">
    <section class="d-flex align-center justify-center">
      <h1 id="title" class="text-center">Add a child</h1>
    </section>
    <section class="text-center">
      <v-avatar class="justify-center" color="indigo">
        <v-icon dark> mdi-account-circle </v-icon>
      </v-avatar>

      <div class="text-center">
        <v-text-field
          class="inputs mx-auto"
          label="First name:"
          v-model="firstName"
        />
        <!-- este atributo v-model,  es el que modifica la variable data en script -->

        <v-text-field
          class="inputs mx-auto"
          label="Last name:"
          v-model="lastName"
        />

        <v-menu
          ref="instanceRef"
          v-model="showCalendar"
          :close-on-content-click="false"
          :return-value.sync="birthday"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              class="inputs mx-auto"
              v-model="birthday"
              label="Birthday:"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="birthday" type="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="showCalendar = false">
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.instanceRef.save(birthday)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>

        <v-select
          class="inputs mx-auto"
          :items="items"
          label="Gender:"
          v-model="gender"
        ></v-select>

        <p class="font-weight-regular">Invite other parent to join</p>

        <v-text-field
          class="inputs mx-auto"
          label="Parent email:"
          v-model="inviteeEmail"
        />

        <v-btn rounded color="primary" class="px-6" @click="createChild">
          SAVE
        </v-btn>
      </div>
    </section>
  </div>
</template>

<script>
import client from "../services/apiRestClient";

export default {
  name: "Signup",
  data() {
    return {
      firstName: "",
      lastName: "",
      birthday: new Date().toISOString().substr(0, 10),
      gender: "",
      inviteeEmail: "",
      errorMessage: "",
      rules: {
        required: (value) => !!value || "Required.",
      },
      showCalendar: false,
      items: ["Male", "Female"],
    };
  },
  methods: {
    createChild() {
      const data = client.createChild(
        this.firstName,
        this.lastName,
        this.birthday,
        this.gender,
        this.inviteeEmail
      );
      if (data.error) {
        this.errorMessage = data.error;
      } else {
        window.location.href = "home";
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
