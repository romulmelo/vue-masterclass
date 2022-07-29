<script>
export default {
  props: {
    type: {
      type: String,
      default: "button"
    },
    variant: {
      type: String,
      default: "primary"
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
      'button',
      `button--${variant}`,
      `button--${size}`,
      `${rounded ? 'button--rounded' : ''}`
    ]"
  >
    <span class="text-xs font-medium">
      <slot />
    </span>
  </button>
</template>

<style lang="postcss" scoped>
.button {
  @apply flex items-center gap-2 rounded py-3 px-5 text-center text-white transition-all;
}

.button--primary {
  @apply bg-blue-600 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/70;
}

.button--large {
  @apply w-full;
}

.button--rounded {
  @apply rounded-full;
}
</style>
