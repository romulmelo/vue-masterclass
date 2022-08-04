<script>
import { Icon } from "@iconify/vue"
export default {
  components: { Icon },
  data: () => ({
    list: [
      { label: "Saved Jobs", icon: "bookmark" },
      { label: "Jobs Alert", icon: "notifications-rounded" }
    ]
  })
}
</script>

<template>
  <div class="molecule-subnav">
    <div class="molecule-subnav__container">
      <div></div>
      <nav class="molecule-subnav__nav">
        <ul class="molecule-subnav__list">
          <li
            v-for="listItem in list"
            :key="listItem.label"
            class="molecule-subnav__item"
            data-test="subnav-list-item"
          >
            <a
              class="molecule-subnav__link"
              href="#"
              :aria-label="listItem.label"
            >
              <Icon
                :icon="`material-symbols:${listItem.icon}`"
                width="24"
                height="24"
              />
              <span>{{ listItem.label }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/molecules/molecule-subnav.scss";
</style>
