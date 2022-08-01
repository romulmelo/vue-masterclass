<script>
import { defineAsyncComponent } from "vue"

import { Icon } from "@iconify/vue"
import AppLogo from "@/components/atoms/AppLogo.vue"
import AppButton from "@/components/atoms/AppButton.vue"
import AppNavList from "@/components/molecules/AppNavList.vue"

export default {
  components: {
    Icon,
    AppAvatar: defineAsyncComponent(() =>
      import("@/components/atoms/AppAvatar.vue")
    ),
    AppLogo,
    AppButton,
    AppNavList
  },
  data: () => ({
    isLoggedIn: false
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
      <div id="logo" class="ml-4 lg:mr-12 lg:ml-0">
        <AppLogo />
      </div>
      <AppNavList />
      <div class="ml-auto flex items-center">
        <AppAvatar
          v-if="isLoggedIn"
          url="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120"
          alt="Profile picture - John Doe"
        />
        <AppButton v-else>Sign In</AppButton>
      </div>
    </div>
  </header>
</template>
