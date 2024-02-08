<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
html {
  overflow-x: hidden;
}
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
useHead({
  title: 'SamoWifHat - Official',
  meta: [
    { name: 'description', content: 'SAMOWIF is a community-driven memecoin that puts the power in the hands of the people.' }
  ],
})

</script>