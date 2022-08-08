<script>
import AppLogo from "@/components/atoms/AppLogo.vue"
export default { components: { AppLogo } }
</script>

<template>
  <div class="molecule-drawer">
    <div class="molecule-drawer__container">
      <div class="molecule-drawer__logo">
        <AppLogo />
      </div>
    </div>
  </div>
  <div class="molecule-drawer-backdrop"></div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/molecules/molecule-drawer.scss";
</style>
