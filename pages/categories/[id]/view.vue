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
      const response = await axios.get(
        `https://task.cayan.co/api/category/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.category = response.data.data;
    } catch (error) {
      console.error(error);
      this.category = {};
    }
  },
};
</script>

<template>
  <div class="main-container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20">
    <div class="card p-6 mb-3 mt-3">
      <h3 class="font-bold border-b-2 mb-4 pb-2">
        {{ category.name }}
      </h3>
      <template
        v-if="category && category.products && category.products.length > 0"
      >
        <p class="text-gray-700 text-xl">Products:</p>
        <ul class="text-gray-700 text-xl my-7 list-disc">
          <li
            class="mx-4"
            v-for="product in category.products"
            :key="product.id"
            :value="product.id"
          >
            {{ product.name }}
          </li>
        </ul>
      </template>
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
