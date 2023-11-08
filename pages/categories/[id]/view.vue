<script>
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      category: {},
    };
  },

  async created() {
    const { id } = useRoute().params;
    const token = localStorage.getItem("token");
    try {
      await axios.get(`https://task.cayan.co/api/category/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.category = response.data.data;
    } catch (error) {
      console.error(error);
      this.category = {};
    }
  },
};
</script>

<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20">
    <div class="product-container p-6 mb-3 mt-3">
      <h2 class="text-xl font-bold mb-2">Category Name: {{ category.name }}</h2>
      <NuxtLink :to="`/categories`">
        <button
          class="mx-1 inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-8"
        >
          Back
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
