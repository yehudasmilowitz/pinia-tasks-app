import { defineStore } from "pinia";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
  isFavorite: boolean;
};

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: "Learn Vue",
        completed: false,
        isFavorite: false,
      },
      {
        id: 2,
        title: "Learn Pinia",
        completed: false,
        isFavorite: false,
      },
      {
        id: 3,
        title: "Learn TypeScript",
        completed: false,
        isFavorite: true,
      },
    ] as Task[],
  }),
  getters: {
    favorites: (state) => {
      return state.tasks.filter((t: Task) => t.isFavorite);
    },
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task);
    },
    removeTask(task: Task) {
      this.tasks = this.tasks.filter((t: Task) => t.id !== task.id);
    },
    updateTask(task: Task) {
      const index = this.tasks.findIndex((t: Task) => t.id === task.id);
      if (index !== -1) {
        this.tasks[index] = task;
      }
    },
  },
});
