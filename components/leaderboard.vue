<script setup lang="ts">
const columns = [{
  key: 'id',
  label: 'ID'
}, {
  key: 'solAddress',
  label: 'Sol Address',
  sortable: true
}, {
  key: 'rank',
  label: 'Rank',
  sortable: true
}]

const paginatedPeople = computed(() => {
  return people.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})

const people = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  solAddress: `5JmV${i.toString().padStart(3, '0')}...`,
  rank: `${i}`,
}))

const page = ref(1)
const pageCount = 10

const uiSettings = {
  wrapper: 'relative overflow-x-auto',
  base: 'min-w-full table-fixed',
  divide: 'divide-y divide-gray-300 dark:divide-gray-700',
  thead: '',
  tbody: 'divide-y divide-gray-200 dark:divide-gray-800',
  tr: {
    base: '',
    selected: 'bg-gray-50 dark:bg-gray-200/50',
    active: 'hover:bg-gray-50 dark:hover:bg-gray-100/50 cursor-pointer',
  },
  th: {
    base: 'text-left rtl:text-right bg-gray-700/20',
    padding: 'px-3 py-3.5',
    color: '',
    font: 'font-semibold',
    size: 'text-sm',
  },
  td: {
    base: 'whitespace-nowrap',
    padding: 'px-3 py-4',
    color: 'text-gray-200',
    font: '',
    size: 'text-sm',
  },
  checkbox: {
    padding: 'ps-4',
  },
  loadingState: {
    wrapper: 'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
    label: 'text-sm text-center text-gray-900 dark:text-white',
    icon: 'w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin',
  },
  emptyState: {
    wrapper: 'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
    label: 'text-sm text-center text-gray-900 dark:text-white',
    icon: 'w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4',
  },
  default: {
    sortAscIcon: 'i-heroicons-bars-arrow-up-20-solid',
    sortDescIcon: 'i-heroicons-bars-arrow-down-20-solid',
    sortButton: {
      icon: 'i-heroicons-arrows-up-down-20-solid',
      trailing: true,
      square: true,
      color: '',
      variant: '',
      class: '-m-1.5',
    },
    loadingState: {
      icon: 'i-heroicons-arrow-path-20-solid',
      label: 'Loading...',
    },
    emptyState: {
      icon: 'i-heroicons-circle-stack-20-solid',
      label: 'No items.',
    },
  },
}


const paginationUi = {
  wrapper: 'flex items-center -space-x-px',
  base: '',
  rounded: 'first:rounded-s-md last:rounded-e-md',
  default: {
    size: 'md',
    activeButton: {
      color: 'transparent',
    },
    inactiveButton: {
      color: 'transparent',
    },
    firstButton: {
      color: 'transparent',
      class: 'rtl:[&_span:first-child]:rotate-180',
      icon: 'i-heroicons-chevron-double-left-20-solid',
    },
    lastButton: {
      color: 'transparent',
      class: 'rtl:[&_span:last-child]:rotate-180',
      icon: 'i-heroicons-chevron-double-right-20-solid',
    },
    prevButton: {
      color: 'transparent',
      class: 'rtl:[&_span:first-child]:rotate-180',
      icon: 'i-heroicons-chevron-left-20-solid',
    },
    nextButton: {
      color: 'transparent',
      class: 'rtl:[&_span:last-child]:rotate-180',
      icon: 'i-heroicons-chevron-right-20-solid',
    },
  },
}
</script>

<template>
  <UTable :ui="uiSettings" :columns="columns" :rows="paginatedPeople" class="">
    <template #solAddress-data="{ row }">
      <USkeleton class="h-4 w-[250px]" />
    </template>
    <template #rank-data="{ row }">
      <USkeleton class="h-4 w-[250px]" />
    </template>
  </UTable>

<!--  <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">-->
<!--    <UPagination class="" :ui="paginationUi" v-model="page" :page-count="pageCount" :total="people.length" />-->
<!--  </div>-->
</template>

