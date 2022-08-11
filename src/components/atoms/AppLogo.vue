<script>
import { Icon } from "@iconify/vue"

export default {
  components: { Icon },
  data: () => ({
    companyName: "Vue Careers"
  })
}
</script>

<template>
  <a
    :title="companyName"
    :aria-label="companyName"
    :class="$style.logo"
    href="https://careers.google.com/"
    tabindex="0"
  >
    <Icon icon="logos:vue" width="24" height="24" aria-label="Vue Logo" />
    <div :class="$style.logoText">
      {{ companyName }}
    </div>
  </a>
</template>

<style lang="css" module>
.logo {
  @apply flex h-full w-fit items-center gap-2;
}

.logoText {
  @apply whitespace-nowrap font-sans text-lg tracking-tight text-zinc-600 lg:text-xl;
}
</style>
