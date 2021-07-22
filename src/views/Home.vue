<template>
  <h1>hola</h1>
  <!-- <v-card class="mx-auto overflow-hidden" height="400">
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Home</v-toolbar-title> -->
  <!-- </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card> -->
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    drawer: false,
    group: null,
  }),
  mounted: function () {
    console.log("se llamo mounted");
  },
  beforeMount: function () {
    const token = localStorage.getItem("user-token");
    // posible valores de token: "", "token""undefined"
    console.log(token);
    if (!token) {
      window.location.href = "login";
      console.log("hola");
    } else {
      console.log("error");
    }
  },
};
</script>

<style></style>
