<script setup lang="ts">
const NavigationItems = ref([
  {
    name: 'Home',
    href: '/',
    target: '_self',
    disabled: false
  },
  // {
  //   name: 'Leaderboard',
  //   href: '/leaderboard',
  //   target: '_self',
  //   disabled: false
  // }
]);
</script>

<template>
  <div class="py-4 px-6 flex flex-col justify-between">
    <div class="space-x-2 justify-center flex">
      <ULink v-for="item in NavigationItems" :key="item.name" :to="item.href" :disabled="item.disabled" :class="{'text-gray-400 cursor-not-allowed': item.disabled}" class="uppercase text-xs text-gray-200 font-light" :target="item.target">
        {{ item.name }}
      </ULink>
    </div>
  </div>
</template>