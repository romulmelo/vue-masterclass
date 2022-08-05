<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <img class="atom-avatar" title="Profile" :src="url" :alt="alt" />
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/atoms/atom-avatar.scss";
</style>
