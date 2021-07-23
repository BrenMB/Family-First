<template>
  <div>
    <template>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="title"
          :counter="30"
          label="Title"
          required
        ></v-text-field>

        <v-textarea
          name="input-7-1"
          v-model="description"
          label="Description"
          hint="Add details"
        ></v-textarea>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="addTodo">
          Add
        </v-btn>
        <v-btn
          :to="{
            name: 'workspace',
            params: { childId: this.$route.params.childId },
          }"
          >Cancel</v-btn
        >
      </v-form>
    </template>
  </div>
</template>

<script>
import API from "../services/apiRestClient";

export default {
  name: "NewTodo",
  data: () => ({
    valid: true,
    title: "",
    description: "",
  }),

  methods: {
    async addTodo() {
      try {
        await API.addTodo({
          childId: this.$route.params.childId,
          title: this.title,
          description: this.description,
        });
        this.$router.push({
          name: "workspace",
          params: { childId: this.$route.params.childId },
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
