<script>
import { Icon } from "@iconify/vue"
export default {
  components: { Icon },
  data: () => ({
    onJobResultsPage: false,
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
      <div class="molecule-subnav__info" data-test="subnav-job-count">
        <Icon
          icon="material-symbols:search"
          width="24"
          height="24"
          color="#71717a"
        />
        <div v-if="onJobResultsPage" class="molecule-subnav__stats">
          <span>4593</span>
          <span>jobs matched</span>
        </div>
        <div
          v-else
          class="molecule-subnav__message"
          data-test="subnav-job-message"
        >
          <a href="#">Find a job at Google</a>
        </div>
      </div>
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
