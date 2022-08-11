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
    v-bind="$attrs"
    :class="[
      $style.button,
      $style[variant],
      $style[size],
      `${rounded ? $style.roundedFull : ''}`
    ]"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<style lang="css" module>
.button {
  @apply flex items-center justify-center gap-2 whitespace-nowrap rounded bg-none py-3 px-5 text-xs font-medium transition-all hover:shadow-md;
}

.filled {
  @apply bg-blue-600 text-white hover:shadow-blue-600/70;
}

.outline {
  @apply bg-transparent text-blue-600 hover:shadow-zinc-400/70;
}

.roundedFull {
  @apply rounded-full;
}

.small {
  @apply w-fit;
}

.wide {
  @apply w-full;
}
</style>
