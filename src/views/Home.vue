<template>
  <div>
    <v-list shaped>
      <v-list-item-group v-model="seleccionado" multiple>
        <template>
          <v-list-item
            v-for="(child, idx) in children"
            :key="idx"
            :value="child"
            active-class="deep-purple--text text--accent-4"
          >
            <template>
              <v-list-item-content>
                <router-link
                  :to="{ name: 'workspace', params: { childId: child._id } }"
                  >{{ child.firstName }}</router-link
                >
                <!-- <v-list-item-title v-text="child.firstName"></v-list-item-title>
                <v-list-item-subtitle>
                  {{ child.lastName }}
                </v-list-item-subtitle> -->
              </v-list-item-content>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
    <v-btn to="child">Add Child</v-btn>
  </div>
</template>

<script>
import API from "../services/apiRestClient";

export default {
  name: "Home",
  data: () => ({
    children: [],
    seleccionado: [],
  }),
  beforeMount: async function () {
    this.children = await API.seeChildren();
  },
};
</script>

<style></style>
