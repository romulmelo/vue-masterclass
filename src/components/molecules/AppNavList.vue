<script>
export default {
  data: () => ({
    list: ["Teams", "Locations", "Benefits", "Jobs", "Students"]
  })
}
</script>

<template>
  <nav aria-label="Main navigation">
    <ul
      class="flex h-full items-center gap-9 text-center font-sans"
      data-test="nav-list"
    >
      <li
        v-for="listItem in list"
        :key="listItem"
        class="block h-full"
        data-test="nav-list-item"
      >
        <a
          href="#"
          class="flex h-full items-center py-2.5 text-[0.875rem] text-zinc-500 transition-colors duration-200 hover:text-zinc-900"
        >
          {{ listItem }}
        </a>
      </li>
    </ul>
  </nav>
</template>
