<script setup lang="ts">
const route = useRoute()

function setLinks() {
  if (route.fullPath === '/') {
    return [{ title: 'Dashboard', href: '/' }]
  }

  const segments = route.fullPath.split('/').filter(item => item !== '')

  const breadcrumbs = segments.map((item, index) => {
    const str = item.replace(/-/g, ' ')
    const title = str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')

    return {
      title,
      href: `/${segments.slice(0, index + 1).join('/')}`,
    }
  })

  return [{ title: 'Dashboard', href: '/' }, ...breadcrumbs]
}

const links = ref<{
  title: string
  href: string
}[]>(setLinks())

watch(() => route.fullPath, (val) => {
  if (val) {
    links.value = setLinks()
  }
})

// Lógica para cambiar el tema
const colorMode = useColorMode()
</script>

<template>
  <header class="sticky top-0 z-10 h-53px flex items-center gap-4 border-b bg-background px-4 md:px-6">
    <div class="w-full flex items-center gap-4">
      <SidebarTrigger />
      <Separator orientation="vertical" class="h-4" />
      <BaseBreadcrumbCustom :links="links" />
    </div>
    <div class="ml-auto flex items-center gap-4">
      <!-- Botón para cambiar el tema -->
      <button
        @click="colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'"
        class="p-2 rounded-full transition-colors"
        :aria-label="`Switch to ${colorMode.preference === 'dark' ? 'light' : 'dark'} mode`"
      >
        <Icon
          :name="colorMode.preference === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'"
          class="h-5 w-5 text-gray-800 dark:text-gray-200"
        />
      </button>
      <slot />
    </div>
  </header>
</template>

<style scoped>
button {
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  transform: scale(1.1); /* Efecto de zoom al pasar el cursor */
}

button:active {
  transform: scale(0.95); /* Efecto de clic */
}
</style>