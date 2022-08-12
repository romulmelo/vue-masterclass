<script>
import { defineAsyncComponent } from "vue"

import AppButton from "@/components/atoms/AppButton.vue"
import AppLogo from "@/components/atoms/AppLogo.vue"
import AppDrawer from "@/components/molecules/AppDrawer.vue"
import AppNav from "@/components/molecules/AppNav.vue"
import AppSubNav from "@/components/molecules/AppSubnav.vue"
import { Icon } from "@iconify/vue"

export default {
  components: {
    AppAvatar: defineAsyncComponent(() =>
      import("@/components/atoms/AppAvatar.vue")
    ),
    AppButton,
    AppDrawer,
    AppLogo,
    AppNav,
    AppSubNav,
    Icon
  },
  data: () => ({
    isLoggedIn: false,
    openDrawer: false
  }),
  methods: {
    handleSignIn() {
      this.isLoggedIn = true
    },
    handleOpenDrawer() {
      this.openDrawer = true
    }
  }
}
</script>

<template>
  <header :class="$style.header" role="banner">
    <div :class="$style.headerContainer">
      <div :class="$style.headerIcons">
        <button
          aria-label="Navigation drawer"
          data-test="menu-button"
          @click="handleOpenDrawer"
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
      <div :class="$style.headerLogo">
        <AppLogo />
      </div>
      <AppNav />
      <div :class="$style.headerLogin">
        <AppAvatar
          v-if="isLoggedIn"
          url="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120"
          alt="Profile picture - John Doe"
        />
        <AppButton v-else @click="handleSignIn">Sign In</AppButton>
      </div>
      <AppDrawer v-model:open="openDrawer" />
    </div>
    <AppSubNav :logged="isLoggedIn" />
  </header>
</template>

<style lang="css" module>
.header {
  @apply h-full;
}

.headerContainer {
  @apply flex h-14 items-center border-b border-zinc-300 px-4 lg:h-16 lg:px-8;
}

.headerContainer > div {
  @apply h-full;
}

.headerIcons {
  @apply relative -ml-4 flex w-14 items-center justify-center p-2 lg:hidden;
}

.headerLogo {
  @apply ml-4 lg:ml-0 lg:mr-12;
}

.headerLogin {
  @apply ml-auto flex items-center;
}
</style>
