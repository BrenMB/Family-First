<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        Create Account
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Invite Partner
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> Add Child </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card>
          <v-card-title>Create an Account</v-card-title>
          <v-card-text>
            <v-text-field
              class="inputs mx-auto"
              label="First name"
              v-model="user.firstName"
            />

            <v-text-field
              class="inputs mx-auto"
              label="Last name"
              v-model="user.lastName"
            />

            <v-text-field
              class="inputs mx-auto"
              label="Phone number"
              v-model="user.phoneNumber"
            />

            <v-text-field
              class="inputs mx-auto"
              label="Email"
              v-model="user.email"
            />

            <v-text-field
              class="inputs mx-auto"
              v-model="user.pwd"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              class="align-center"
              @click="createAnAccountUser"
            >
              Save &amp; Continue
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card>
          <v-card-title>invite Partner</v-card-title>
          <v-card-text>
            <v-text-field
              class="inputs mx-auto"
              label="First name"
              v-model="guest.firstName"
            />

            <v-text-field
              class="inputs mx-auto"
              label="Last name"
              v-model="guest.lastName"
            />

            <v-text-field
              class="inputs mx-auto"
              label="Phone number"
              v-model="guest.phoneNumber"
            />

            <v-text-field
              class="inputs mx-auto"
              label="Email"
              v-model="guest.email"
            />

            <v-text-field
              class="inputs mx-auto"
              v-model="guest.pwd"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              class="align-center"
              @click="createAnAccountGuest"
            >
              Save &amp; Continue
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card>
          <v-card-title>Add Child</v-card-title>
          <v-card-text>
            <v-text-field
              class="inputs mx-auto"
              label="First name:"
              v-model="child.firstName"
            />

            <v-text-field
              class="inputs mx-auto"
              label="Last name:"
              v-model="child.lastName"
            />

            <v-menu
              ref="instanceRef"
              v-model="showCalendar"
              :close-on-content-click="false"
              :return-value.sync="child.birthday"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  class="inputs mx-auto"
                  v-model="child.birthday"
                  label="Birthday:"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="child.birthday"
                type="date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="showCalendar = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.instanceRef.save(child.birthday)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>

            <v-select
              class="inputs mx-auto"
              :items="items"
              label="Gender:"
              v-model="child.gender"
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-btn rounded color="primary" class="px-6" @click="createChild">
              SAVE
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import client from "../services/apiRestClient";

export default {
  name: "Signup",
  data() {
    return {
      guest: {
        firstName: "manolo",
        lastName: "cabezabolo",
        email: "manoolo@gmail.com",
        phoneNumber: "12123123",
        pwd: "123123123",
      },
      user: {
        firstName: "brenda",
        lastName: "martin",
        email: "brenda@gmail.com",
        phoneNumber: "+34727272",
        pwd: "123123123",
      },
      child: {
        firstName: "Hector",
        lastName: "Martin",
        birthday: new Date().toISOString().substr(0, 10),
        gender: "Male",
        guestId: "",
      },
      show1: false,
      errorMessage: "",
      showCalendar: false,
      items: ["Male", "Female"],
      rules: {
        required: (value) => !!value || "Required.",
      },
      e1: 1,
    };
  },
  methods: {
    async createAnAccountUser() {
      try {
        await client.signUp(this.user);
        this.e1 = 2;
      } catch (error) {
        this.errorMessage = error;
      }
    },
    async createAnAccountGuest() {
      try {
        const { id } = await client.addGuest(this.guest);
        this.child.guestId = id;
        this.e1 = 3;
      } catch (error) {
        this.errorMessage = error;
      }
    },
    async createChild() {
      try {
        await client.createChild(this.child);
        this.$router.push("home"); //window.location.href="home" equivalente
      } catch (error) {
        this.errorMessage = error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#title {
  font-size: 2em;
}
.inputs {
  width: 200px;
}
</style>
