<script>
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      product: {},
    };
  },

  async created() {
    const { id } = useRoute().params;
    const token = localStorage.getItem("token");
    try {
      await axios.get(`https://task.cayan.co/api/product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.product = response.data.data;
    } catch (error) {
      console.error(error);
      this.product = {};
    }
  },
};
</script>

<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20">
    <div class="card-container p-6 mb-3 mt-3">
      <h2 class="text-xl font-bold mb-2">Product Name: {{ product.name }}</h2>
      <p class="text-gray-700 mb-4">Product Price: {{ product.price }}</p>
      <NuxtLink :to="`/products`">
        <button
          class="mx-1 inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-8"
        >
          Back
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
