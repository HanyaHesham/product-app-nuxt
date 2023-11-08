<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20">
    <p>Product Details for {{ id }}</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
      veritatis enim cumque eaque? Consectetur a nulla, est sed error amet
      reiciendis sunt, id praesentium unde nihil rerum quos esse excepturi.
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>
