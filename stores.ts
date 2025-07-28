import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', {
    state: () => ({
      items: [] as string[],
      count: 0,
    }),
    actions: {
      add(item: string) {
        this.items.push(item)
      },
      increaseCount() {
        this.count++;
      },
    },
  })
  