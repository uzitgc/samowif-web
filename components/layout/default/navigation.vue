<template>
  <nav class="flex justify-between items-center bg-gray-600/10 rounded-md py-1.5 px-3">
    <img src="/official-logo.png" class="h-8 w-8" />
    <ul class="flex space-x-2 uppercase">
      <li v-for="item in navigationItems"><a :href="item.href">{{item.title}}</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const navigationItems = ref([
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Tokenomics',
    href: '#tokenomics-section'
  },
  {
    title: 'Roadmap',
    href: '#roadmap-section'
  },
  {
    title: 'Leaderboard',
    href: '#leaderboard-section'
  },
]);
</script>