<template>
  <div>
   
    <v-list-item two-line v-for="(todo, idx) in todos" :key="idx">
      <v-list-item-content>
        <v-list-item-title> {{ todo.title }} </v-list-item-title>
        <v-list-item-subtitle> {{ todo.description }} </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
     <v-btn to="newTodo">Add Todo</v-btn>
  </div>
</template>

<script>
import API from "../services/apiRestClient";

export default {
  name: "Home",
  data: () => ({
    todos: [],
    checkbox: [],
  }),
  beforeMount: async function () {
    this.todos = await API.seeTodos();
  },
};
</script>

<style></style>
