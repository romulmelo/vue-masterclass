<script>
export default {
  data: () => ({
    companyName: "Vue Careers"
  })
}
</script>

<template>
  <header role="banner">
    <div class="h-14 border-b border-zinc-300 px-4">
      <a
        href="#"
        class="flex h-full w-fit items-center gap-2"
        tabindex="0"
      >
        <div class="font-sans text-lg tracking-tight text-zinc-600 lg:text-xl">
          {{ companyName }}
        </div>
      </a>
    </div>
  </header>
</template>
