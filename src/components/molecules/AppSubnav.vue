<script>
import { Icon } from "@iconify/vue"
export default {
  components: { Icon },
  props: {
    logged: {
      type: Boolean
    }
  },
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
  <div :class="$style.subnav">
    <div :class="$style.subnavContainer">
      <div :class="$style.subnavInfo" data-test="subnav-job-count">
        <Icon
          icon="material-symbols:search"
          width="24"
          height="24"
          color="#71717a"
        />
        <div v-if="onJobResultsPage" :class="$style.subnavInfoResults">
          <span>4593</span>
          <span>jobs matched</span>
        </div>
        <div
          v-else
          :class="$style.subnavInfoMessage"
          data-test="subnav-job-message"
        >
          <a href="#">Find a job at Google</a>
        </div>
      </div>
      <nav
        v-if="logged"
        :class="$style.subnavNavigation"
        data-test="subnav-list"
      >
        <ul :class="$style.subnavNavigationList">
          <li
            v-for="item in list"
            :key="item.label"
            :class="$style.subnavNavigationItem"
            data-test="subnav-list-item"
          >
            <a
              href="#"
              :class="$style.subnavNavigationLink"
              :aria-label="item.label"
            >
              <Icon
                :icon="`material-symbols:${item.icon}`"
                width="24"
                height="24"
              />
              <span>{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="css" module>
.subnav {
  @apply block h-14 w-full border-b border-zinc-300 lg:h-16;
}

.subnavContainer {
  @apply flex h-full items-center justify-between px-4 lg:px-8;
}

.subnavInfo {
  @apply flex h-full items-center justify-between gap-4;
}

.subnavInfoResults {
  @apply flex gap-1;
}

.subnavInfoResults span {
  @apply font-sans text-[0.875rem] text-zinc-500;
}

.subnavInfoResults span:not(:first-child) {
  @apply text-green-700;
}

.subnavInfoMessage {
  @apply font-sans text-[0.875rem];
}

.subnavInfoMessage a {
  @apply text-blue-600 underline;
}
.subnavNavigation {
  @apply h-full flex-1;
}

.subnavNavigationList {
  @apply flex h-full items-center justify-end gap-8;
}

.subnavNavigationItem {
  @apply flex h-full items-center;
}

.subnavNavigationLink {
  @apply flex h-full items-center gap-1 py-2.5 font-sans text-[0.875rem] text-zinc-500 transition-colors duration-200;
}

.subnavNavigationLink span {
  @apply hidden lg:block;
}
</style>
