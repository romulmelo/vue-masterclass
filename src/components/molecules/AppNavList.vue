<script>
export default {
  props: {
    isVertical: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    list: ["Teams", "Locations", "Benefits", "Jobs", "Students"]
  })
}
</script>

<template>
  <nav
    :class="['vc-nav', `${isVertical ? 'vc-nav--vertical' : ''}`]"
    aria-label="Main navigation"
  >
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

<style lang="postcss" scoped>
.vc-nav {
  @apply hidden lg:block lg:flex-1;
}

.vc-nav--vertical {
  @apply flex;
}

.vc-nav--vertical ul {
  @apply flex-1 flex-col items-start gap-6;
}

.vc-nav--vertical ul li {
  @apply w-full;
}
</style>
