<template>
  <footer>
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 flex justify-between">
      <div class="space-y-8 flex flex-col">
        <div class="flex space-x-4 items-center">
          <img class="h-7" src="/public/official-logo.png" alt="Company name" />
          <p class="text-sm leading-6 text-gray-300">Making the world a better place...</p>
        </div>
        <div class="flex space-x-6">
          <a v-for="item in navigation.social" :key="item.name" target="_blank" :href="item.href" class="text-gray-500 hover:text-gray-400">
            <span class="sr-only">{{ item.name }}</span>

            <i :class="`${item.icon} transition text-xl text-gray-400 hover:text-gray-300 duration-300 h-6 w-6`"></i>
          </a>
        </div>
      </div>
      <div class="text-center">
        <p class="text-xs leading-5 text-white">&copy; 2024 Samo wif Hat, All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const navigation = {
  social: [
    {
      name: 'Discord',
      href: 'https://discord.gg/ERMnwupDq4',
      icon: 'fa-brands fa-discord',
      "animation-delay": 'delay-100',
    },
    {
      name: 'Telegram',
      href: 'https://t.me/samowif',
      icon: 'fa-brands fa-telegram',
      "animation-delay": 'delay-100',
    },
    {
      name: 'X',
      href: 'https://twitter.com/samowifahat',
      icon: 'fa-brands fa-twitter',
      "animation-delay": 'delay-100',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/uzitgc/samowif-web',
      icon: 'fa-brands fa-github',
      "animation-delay": 'delay-100',
    },
  ],
}
</script>