import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", {
    state: () => ({
        categoryId: null,
        categoryName: "",
    }),
    actions: {
        setCategory(id, name) {
            this.categoryId = id;
            this.categoryName = name;
        },
    },
    persist: {
        storage: localStorage,
    }
})