<template>
  <div>
    <v-list shaped>
      <v-list-item-group v-model="seleccionado" multiple>
        <template>
          <v-list-item
            v-for="(todo, idx) in todos"
            :key="idx"
            :value="todo"
            active-class="deep-purple--text text--accent-4"
          >
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="todo.title"></v-list-item-title>
                <v-list-item-subtitle>
                  {{ todo.description }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="deep-purple accent-4"
                ></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
    <v-btn
      :to="{ name: 'newTodo', params: { childId: this.$route.params.childId } }"
      >Add Todo</v-btn
    >
    <v-btn
      :to="{
        name: 'Home',
      }"
      >Back HOME</v-btn
    >

  </div>
</template>

<script>
import API from "../services/apiRestClient";

export default {
  name: "Workspace",
  data: () => ({
    todos: [],
    seleccionado: [],
  }),
  beforeMount: async function () {
    this.todos = await API.seeTodos(this.$route.params.childId);
  },
};
</script>

<style></style>
