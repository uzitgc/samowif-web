<script setup lang="ts">
import { WalletMultiButton, useWallet } from "solana-wallets-vue";
import {clusterApiUrl, Connection, PublicKey} from "@solana/web3.js";

const connection = new Connection('https://delicate-dry-sea.solana-mainnet.quiknode.pro/491fc2e3358a17e5c6131ff17f1df4294e298d78/');

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

const toast = useToast();

watch(() => useWallet().publicKey.value, async (value, oldValue, onCleanup) => {
  console.log('Value changed', value ? value.toBase58() : value)

  if(value) {
    toast.add({ title: 'Wallet connected!', description: 'Welcome to the SAMOWIF ARMY!' })

    try {
      const balance = await connection.getBalance(value);

      console.log(balance.toString())
    } catch (e) {
      console.log('Unable to get the balance of the account.')

      toast.add({ title: 'BALANCE REQUEST ERROR!', description: `Unable to get the balance for the ${useWallet().publicKey.value?.toBase58()}`, color: 'red' })
    }
  }

})




onMounted(async () => {
  console.log(`
  Loaded the following public key: ${useWallet().publicKey.value}
  `)
})

const swv_button_height = computed(() => useWallet().connected ? '0' : 'auto');

</script>

<template>
  <div class="py-4 px-6 flex justify-center space-x-16">
    <div class="space-x-2 justify-center flex">
      <ULink v-for="item in NavigationItems" :key="item.name" :to="item.href" :disabled="item.disabled" :class="{'text-gray-400 cursor-not-allowed': item.disabled}" class="uppercase text-xs text-gray-200 font-light" :target="item.target">
        {{ item.name }}
      </ULink>
    </div>

    <ClientOnly>
      <div id="wallet_wrapper" class="flex items-center">
        <WalletMultiButton />
      </div>
    </ClientOnly>
  </div>
</template>

<style>
.swv-dropdown, .swv-button {
  @apply bg-transparent;
}

.swv-button {
  @apply text-xs;
  height: v-bind(swv_button_height);
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