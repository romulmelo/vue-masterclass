<script>
import { Icon } from "@iconify/vue"
import AppLogo from "@/components/atoms/AppLogo.vue"
import AppNavList from "@/components/molecules/AppNavList.vue"

export default {
  components: { Icon, AppLogo, AppNavList }
}
</script>

<template>
  <header role="banner">
    <div class="flex h-14 border-b border-zinc-300 px-4 lg:h-16 [&>div]:h-full">
      <div
        id="menu-hamburguer"
        class="relative -ml-4 flex w-14 items-center justify-center p-2 lg:hidden"
      >
        <button aria-label="Navigation drawer" data-test="main-hamburguer-menu">
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
      <div id="logo" class="ml-4 mr-12 lg:ml-0">
        <AppLogo />
      </div>
      <AppNavList />
    </div>
  </header>
</template>
