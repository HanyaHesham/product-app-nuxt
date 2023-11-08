<script setup>
import axios from "axios";
import { defineProps } from "vue";

const props = defineProps(["products"]);

const deleteProduct = async (productId) => {
  const token = localStorage.getItem("token");
  try {
    await axios.delete(`https://task.cayan.co/api/product/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Remove the deleted product from the products array
    props.products = props.products.filter(
      (product) => product.id !== productId
    );
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div>
    <div
      v-for="product in products"
      :key="product.id"
      class="product-container p-6"
    >
      <h2 class="text-xl font-bold mb-2">Product Name: {{ product.name }}</h2>
      <p class="text-gray-700 mb-4">Product Price: {{ product.price }}</p>
      <NuxtLink :to="`/products/${product.id}`">
        <button
          class="mx-1 inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-8"
        >
          Read More
        </button>
      </NuxtLink>
      <button
        class="mx-1 inline-block bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded mb-8"
        @click="deleteProduct(product.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>
