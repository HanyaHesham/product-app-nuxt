<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      type: "products",
    };
  },
  methods: {
    async handleShowProducts() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("https://task.cayan.co/api/product", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.products = response.data.data;
      } catch (error) {
        console.error(error);
        this.products = [];
      }
    },

    async handleDeleteProduct(itemId) {
      try {
        await axios.delete(`https://task.cayan.co/api/product/${itemId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        this.handleShowProducts();
      } catch (error) {
        console.error(error);
      }
    },
  },

  created() {
    this.handleShowProducts();
  },
};
</script>

<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20">
    <div class="relative flex items-center justify-between mt-8 mb-2">
      <h2 class="text-3xl font-bold">All Products</h2>
      <NuxtLink :to="`/products/add`">
        <button
          class="py-2 px-4 inline-block bg-blue-500 hover:bg-blue-700 text-white rounded"
        >
          Add Product
        </button>
      </NuxtLink>
    </div>
    <section>
      <Card :items="products" :type="type" :deleteItem="handleDeleteProduct" />
    </section>
  </div>
</template>
