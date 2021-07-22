<template>
  <div>
    <v-btn to="newTodo">Add Todo</v-btn>
    <div v-for="(todo, idx) in todos" :key="idx">
      {{ todo }}
    </div>
  </div>
</template>

<script>
import API from "../services/apiRestClient";

export default {
  name: "Home",
  data: () => ({
    todos: [],
  }),
  beforeMount: async function () {
    this.todos = await API.seeTodos();
  },
};
</script>

<style></style>
