<script>
import axios from "axios";

export default {
  data() {
    return {
      categories: [],
      type: "categories",
    };
  },

  methods: {
    async handleShowCategories() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("https://task.cayan.co/api/category", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.categories = response.data.data;
      } catch (error) {
        console.error(error);
        this.categories = [];
      }
    },

    async handleDeleteCategory(itemId) {
      try {
        await axios.delete(`https://task.cayan.co/api/category/${itemId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        this.handleShowCategories();
      } catch (error) {
        console.error(error);
      }
    },
  },

  created() {
    this.handleShowCategories();
  },
};
</script>

<template>
  <div class="main-container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20">
    <div class="relative flex items-center justify-between mt-8 mb-2">
      <h2 class="text-3xl font-bold">All Categories</h2>
      <NuxtLink :to="`/categories/add`">
        <button
          class="py-2 px-4 inline-block bg-blue-500 hover:bg-blue-700 text-white rounded"
        >
          Add Category
        </button>
      </NuxtLink>
    </div>
    <section>
      <Card
        :items="categories"
        :type="type"
        :deleteItem="handleDeleteCategory"
      />
    </section>
  </div>
</template>
