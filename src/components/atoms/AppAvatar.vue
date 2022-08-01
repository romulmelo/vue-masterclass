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
  <img
    class="h-10 w-10 cursor-pointer rounded-full object-cover"
    title="Profile"
    :src="url"
    :alt="alt"
  />
</template>
