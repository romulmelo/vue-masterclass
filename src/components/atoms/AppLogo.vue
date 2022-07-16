<script>
import { Icon } from "@iconify/vue"

export default {
  components: {
    Icon
  },
  data: () => ({
    companyName: "Vue Careers"
  })
}
</script>

<template>
  <a
    :title="companyName"
    :aria-label="companyName"
    class="flex h-full w-fit items-center gap-2"
    href="https://careers.google.com/"
    tabindex="0"
  >
    <Icon
      icon="logos:vue"
      width="24"
      height="24"
      aria-label="Vue Logo"
    />
    <div class="font-sans text-lg tracking-tight text-zinc-600 lg:text-xl">
      {{ companyName }}
    </div>
  </a>
</template>
