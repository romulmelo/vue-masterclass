<script>
export default {
  data: () => ({
    list: ["Teams", "Locations", "Benefits", "Jobs", "Students"]
  })
}
</script>

<template>
  <nav class="molecule-nav" aria-label="Main navigation">
    <ul class="molecule-nav__list">
      <li
        v-for="listItem in list"
        :key="listItem"
        class="molecule-nav__item"
        data-test="nav-list-item"
      >
        <a href="#" class="molecule-nav__link">
          {{ listItem }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/molecules/molecule-nav.scss";
</style>
