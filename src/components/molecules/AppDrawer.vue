<script>
import AppLogo from "@/components/atoms/AppLogo.vue"
export default { components: { AppLogo } }
</script>

<template>
  <div :class="$style.drawer">
    <div :class="$style.drawerContainer">
      <div :class="$style.drawerLogo">
        <AppLogo />
      </div>
    </div>
  </div>
  <div :class="$style.drawerBackdrop"></div>
</template>

<style lang="css" module>
.drawer {
  @apply fixed top-0 left-0 right-14 bottom-0 z-20 max-w-[280px] bg-white;
}

.drawerContainer {
  @apply h-full;
}

.drawerLogo {
  @apply h-14 border-b border-zinc-300 px-4 lg:h-16;
}

.drawerBackdrop {
  @apply fixed inset-0 z-10 bg-black/40;
}
</style>
