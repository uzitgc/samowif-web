<template>
  <div class="flex">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@font-face {
  font-family: 'Proto Mono Light';
  font-display: optional;
  src: url('/public/fonts/Proto Mono Light.ttf') format('ttf');
}

body {
  @apply antialiased font-sans text-gray-200 bg-gray-900;
  font-family: "Proto Mono Light", monospace;
  font-size: 0.8rem;
  box-shadow: inset 50px 50px 150px 250px rgba(0,0,0,.2);

}



</style>

<script setup lang="ts">
import '~/assets/css/font-awesome/all.min.css';

useHead({
  title: 'SAMOWIF - Official Website',
  meta: [
    { name: 'description', content: 'SAMOWIF is a community-driven memecoin that puts the power in the hands of the people. Our mission is to build a strong and healthy community by providing tools and services that will benefit everyone. With SAMOWIF power, we can conquer the world!'}
  ],
})
</script>