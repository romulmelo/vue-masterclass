<script>
export default {
  data: () => ({
    list: ["Teams", "Locations", "Benefits", "Jobs", "Students"]
  })
}
</script>

<template>
  <nav :class="$style.nav" aria-label="Main navigation">
    <ul :class="$style.navList">
      <li
        v-for="item in list"
        :key="item"
        :class="$style.navItem"
        data-test="nav-list-item"
      >
        <a href="#" :class="$style.navLink">
          {{ item }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="css" module>
.nav {
  @apply hidden lg:block lg:h-full lg:flex-1;
}

.navList {
  @apply flex h-full items-center gap-9 text-center;
}

.navItem {
  @apply flex h-full items-center;
}

.navLink {
  @apply relative flex h-full items-center py-2.5 font-sans text-[0.875rem] text-zinc-500 transition-colors duration-200 hover:text-zinc-900;
}
</style>
