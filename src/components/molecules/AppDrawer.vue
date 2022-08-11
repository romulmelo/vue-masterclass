<script>
import AppLogo from "@/components/atoms/AppLogo.vue"
export default {
  components: { AppLogo },
  props: {
    open: {
      type: Boolean
    }
  },
  emits: ["update:open"],
  data: () => ({
    list: ["Teams", "Locations", "Benefits", "Jobs", "Students"]
  }),
  methods: {
    handleClose() {
      return this.$emit("update:open", false)
    }
  }
}
</script>

<template>
  <div v-show="open" :class="$style.drawer">
    <div :class="$style.drawerContainer">
      <div :class="$style.drawerLogo">
        <AppLogo />
      </div>
      <nav :class="$style.drawerNavigation">
        <ul :class="$style.drawerNavigationList">
          <li
            v-for="item in list"
            :key="item"
            :class="$style.drawerNavigationItem"
            data-test="drawer-link"
          >
            <a href="#" :class="$style.drawerNavigationLink">
              {{ item }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div
    v-show="open"
    :class="$style.drawerBackdrop"
    data-test="drawer-backdrop"
    @click="handleClose"
  />
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

.drawerNavigation {
  @apply py-5;
}

.drawerNavigationList {
  @apply block text-left;
}

.drawerNavigationItem {
  @apply block h-auto;
}

.drawerNavigationLink {
  @apply block h-12 px-4 py-2.5 font-sans text-[0.875rem] text-zinc-500 transition-colors hover:text-zinc-900;
}

.drawerBackdrop {
  @apply fixed inset-0 z-10 bg-black/40;
}
</style>
