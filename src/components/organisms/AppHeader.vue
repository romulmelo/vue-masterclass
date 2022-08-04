<script>
import { defineAsyncComponent } from "vue"

import AppButton from "@/components/atoms/AppButton.vue"
import AppLogo from "@/components/atoms/AppLogo.vue"
import AppNav from "@/components/molecules/AppNav.vue"
import { Icon } from "@iconify/vue"

export default {
  components: {
    Icon,
    AppAvatar: defineAsyncComponent(() =>
      import("@/components/atoms/AppAvatar.vue")
    ),
    AppLogo,
    AppButton,
    AppNav
  },
  data: () => ({
    isLoggedIn: false
  }),
  methods: {
    handleSignIn() {
      this.isLoggedIn = true
    }
  }
}
</script>

<template>
  <header class="organism-header" role="banner">
    <div class="organism-header__container">
      <div class="organism-header__icons">
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
      <div class="organism-header__logo">
        <AppLogo />
      </div>
      <AppNav />
      <div class="organism-header__login">
        <AppAvatar
          v-if="isLoggedIn"
          url="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120"
          alt="Profile picture - John Doe"
        />
        <AppButton v-else @click="handleSignIn">Sign In</AppButton>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/organisms/organism-header.scss";
</style>
