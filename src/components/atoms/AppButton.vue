<script>
export default {
  props: {
    type: {
      type: String,
      default: "button"
    },
    variant: {
      type: String,
      default: "filled"
    },
    size: {
      type: String,
      default: "small"
    },
    rounded: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <button
    :type="type"
    v-bind="$attrs"
    :class="[
      'atom-button',
      `atom-button--${variant}`,
      `atom-button--${size}`,
      `${rounded ? 'atom-button--rounded' : ''}`
    ]"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/atoms/atom-button.scss";
</style>
