<script>
import { Icon } from "@iconify/vue"
import AppLogo from "@/components/atoms/AppLogo.vue"

export default {
  components: { Icon, AppLogo },
  data: () => ({
    menuItems: ["Teams", "Locations", "Benefits", "Jobs", "Students"]
  })
}
</script>

<template>
  <header role="banner">
    <div class="flex h-14 border-b border-zinc-300 px-4 lg:h-16 [&>div]:h-full">
      <div
        id="menu-hamburguer"
        class="relative -ml-4 flex w-14 items-center justify-center p-2 lg:hidden"
      >
        <button
          aria-label="Navigation drawer"
          aria-controls="vc-header__drawer vc-header__drawer-backdrop"
          data-test="main-hamburguer-menu"
        >
          <Icon
            icon="ic:baseline-menu"
            aria-label="Open menu"
            alt="Menu icon"
            width="24"
            height="24"
            color="#5f6368"
          />
        </button>
      </div>
      <div id="logo" class="ml-4 lg:ml-0">
        <AppLogo />
      </div>
      <nav class="ml-12 flex-1" arial-label="Main navigation">
        <ul
          class="hidden h-full items-center gap-9 text-center font-sans lg:flex"
          data-test="main-nav-list"
        >
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
