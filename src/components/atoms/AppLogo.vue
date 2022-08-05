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
    class="atom-logo"
    href="https://careers.google.com/"
    tabindex="0"
  >
    <Icon icon="logos:vue" width="24" height="24" aria-label="Vue Logo" />
    <div class="atom-logo__title">
      {{ companyName }}
    </div>
  </a>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/atoms/atom-logo.scss";
</style>
