<script setup>
import axios from "axios";
import { defineProps } from "vue";

const props = defineProps(["items", "type"]);

const deleteItem = async (itemId) => {
  const token = localStorage.getItem("token");
  try {
    await axios.delete(`https://task.cayan.co/api/${props.type}/${itemId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Remove the deleted item from the items array
    props.items = props.items.filter((item) => item.id !== itemId);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
      <div
        v-for="item in items"
        :key="item.id"
        class="product-container mb-3 mt-3"
      >
        <h2 class="text-xl font-bold mb-2">Name: {{ item.name }}</h2>
        <template v-if="props.type === 'products'">
          <p class="text-gray-700 mb-4">Price: {{ item.price }}</p>
        </template>
        <div class="mt-3">
          <NuxtLink :to="`/${props.type}/${item.id}/view`">
            <button
              class="mx-1 inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-8"
            >
              Read More
            </button>
          </NuxtLink>
          <button
            class="mx-1 inline-block bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded mb-8"
            @click="deleteItem(item.id)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
