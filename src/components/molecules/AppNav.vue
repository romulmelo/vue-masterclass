<script>
export default {
  data: () => ({
    companyName: "Vue Careers",
    menuItems: ["Teams", "Locations", "Benefits", "Jobs", "Students"]
  })
}
</script>

<template>
  <header role="banner">
    <div class="flex h-14 border-b border-zinc-300 px-4 lg:h-16">
      <a
        :title="companyName"
        :aria-label="companyName"
        href="#"
        class="flex h-full w-fit items-center gap-2"
        tabindex="0"
        data-test="main-nav-logo"
      >
        <div class="font-sans text-lg tracking-tight text-zinc-600 lg:text-xl">
          {{ companyName }}
        </div>
      </a>
      <nav
        arial-label="Main navigation"
        class="ml-12 h-full flex-1"
      >
        <ul class="flex h-full items-center gap-9 text-center font-sans">
          <li
            v-for="menuItem in menuItems"
            :key="menuItem"
            class="block h-full"
            data-test="main-nav-list-item"
          >
            <a
              href="#"
              class="flex h-full items-center py-2.5 text-[0.875rem] text-zinc-500 transition-colors duration-200 hover:text-zinc-900"
            >
              {{ menuItem }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
