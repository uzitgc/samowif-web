<template>
  <nav class="flex justify-center items-center bg-gray-600/10 rounded-md py-1.5 px-3">
    <ul class="flex space-x-2 uppercase">
      <li v-for="item in navigationItems"><NuxtLink class="text-cyan-300 hover:text-cyan-200 font-bold duration-300" to="{{item.href}}">{{item.title}}</NuxtLink></li>
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
    href: '/#tokenomics-section'
  },
  {
    title: 'Roadmap',
    href: '/#roadmap-section'
  },
  {
    title: 'Leaderboard',
    href: '/#leaderboard-section'
  },
]);
</script>