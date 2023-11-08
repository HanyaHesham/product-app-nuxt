<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      type: "products",
    };
  },

  async created() {
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
};
</script>

<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20">
    <h2 class="text-3xl font-bold mt-8">All Products</h2>
    <section>
      <Card :items="products" :type="type" />
    </section>
  </div>
</template>
