<script setup lang="ts">
import { WalletMultiButton } from "solana-wallets-vue";

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
  <div class="py-4 px-6 flex justify-center space-x-16">
    <div class="space-x-2 justify-center flex">
      <ULink v-for="item in NavigationItems" :key="item.name" :to="item.href" :disabled="item.disabled" :class="{'text-gray-400 cursor-not-allowed': item.disabled}" class="uppercase text-xs text-gray-200 font-light" :target="item.target">
        {{ item.name }}
      </ULink>

      <WalletMultiButton />
    </div>
  </div>
</template>

<style>
.swv-dropdown, .swv-button {
  @apply bg-transparent;
}

.swv-button {
  @apply text-xs;
  font-family: "Proto Mono Light", monospace;
}

.swv-button-icon {
  height: 16px;
  width: 16px;
}

#wallet_wrapper > div {
  display: flex;
}
</style>