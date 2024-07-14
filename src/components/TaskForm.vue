<template>
  <form @submit.prevent="addTask">
    <input type="text" v-model="newTask" placeholder="Enter task title" />
    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";

const taskStore = useTaskStore();
const newTask = ref("");

const addTask = () => {
  if (!newTask.value) return;
  taskStore.addTask({
    id: Math.floor(Math.random() * 10000),
    title: newTask.value,
    completed: false,
    isFavorite: false,
  });
  newTask.value = "";
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  background: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
