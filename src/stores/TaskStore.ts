import { defineStore } from "pinia";

export type Task = {
  id: string;
  title: string;
  completed: boolean;
  isFavorite: boolean;
};

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [] as Task[],
    loading: false,
  }),
  getters: {
    favorites: (state) => {
      return state.tasks.filter((t: Task) => t.isFavorite);
    },
  },
  actions: {
    async getTasks() {
      this.loading = true;
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      this.tasks = data;
      this.loading = false;
    },
    async addTask(task: Task) {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error("Failed to add task");
      }
      const newTask = await response.json();
      this.tasks.push(newTask);
    },
    async deleteTask(id: Task["id"]) {
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete task");
      }
      this.tasks = this.tasks.filter((t: Task) => t.id !== id);
    },
    async toggleFavorite(task: Task) {
      const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isFavorite: !task.isFavorite }),
      });
      if (!response.ok) {
        throw new Error("Failed to toggle favorite");
      }
      const updatedTask = await response.json();
      Object.assign(task, updatedTask);
    },
  },
});
