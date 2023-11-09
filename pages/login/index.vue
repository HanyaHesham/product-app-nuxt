<script setup>
import { useRouter } from "vue-router";
import axios from "axios";

const email = ref("");
const password = ref("");

const router = useRouter();

const login = async (event) => {
  event.preventDefault();
  if (!email.value || !password.value) {
    console.log("Please enter email and password");
    return;
  }

  try {
    const response = await axios.post("https://task.cayan.co/api/login", {
      email: email.value,
      password: password.value,
    });

    const token = response.data.data.token;

    if (!token) {
      console.error("Invalid response from server");
      return;
    }

    localStorage.setItem("token", token);
    router.push("/");
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>

      <form class="space-y-6" @submit="login" method="POST">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              v-model="email"
              class="block p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              v-model="password"
              class="block p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <!-- <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a
          href="/register"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Register Now
        </a>
      </p> -->
    </div>
  </div>
</template>
