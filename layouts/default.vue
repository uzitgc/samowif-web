<template>
  <div id="a_test" class="mx-auto grow flex flex-col relative min-h-screen">
    <div class="grow flex flex-col">
      <ClientOnly>
        <slot />
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
</script>