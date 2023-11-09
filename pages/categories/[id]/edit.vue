<script setup>
import axios from "axios";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const name = ref("");
const { id } = useRoute().params;

const handleShowCategory = async () => {
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

    name.value = response.data.data.name;
  } catch (error) {
    console.error(error);
  }
};

const updateCategory = async (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("_method", "put");

  try {
    await axios.post(`https://task.cayan.co/api/category/${id}`, formData, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    router.push("/categories");
  } catch (error) {
    console.error(error);
  }
};

onMounted(handleShowCategory);
</script>

<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20">
    <div class="card p-6 mb-3 mt-3">
      <h3 class="font-bold border-b-2 mb-4 pb-2">Edit Category</h3>

      <form class="space-y-6" @submit="updateCategory" method="POST">
        <div>
          <label
            for="name"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div class="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              autocomplete="name"
              required
              v-model="name"
              minlength="4"
              class="block p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="mt-3">
          <NuxtLink :to="`/categories`">
            <button
              class="mx-1 inline-block border-2 hover:text-white hover:bg-blue-500 text-black py-2 px-4 rounded mb-8"
            >
              Back
            </button>
          </NuxtLink>
          <button
            type="submit"
            class="mx-1 inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-8"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
