<script setup lang="ts">
import type { SidebarMenuButtonVariants } from '~/components/ui/sidebar'
import type { NavLink } from '~/types/nav'
import { useSidebar } from '~/components/ui/sidebar'

withDefaults(defineProps<{
  item: NavLink
  size?: SidebarMenuButtonVariants['size']
}>(), {
  size: 'default',
})

const { setOpenMobile } = useSidebar()
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton as-child :tooltip="item.title" :size="size" class="group w-full">
        <NuxtLink
          :to="item.link"
          class="flex items-center gap-3 px-4 py-2 rounded-md transition-all hover:bg-[#f1f5f9] text-muted-foreground hover:text-primary"
          @click="setOpenMobile(false)"
        >
          <Icon :name="item.icon || ''" mode="svg" class="h-5 w-5" />
          <span class="text-sm font-medium">{{ item.title }}</span>
        </NuxtLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</template>


<style scoped>
.text-xs {
  font-size: 0.75rem;
}

.h-6 {
  height: 1.5rem;
}

.w-6 {
  width: 1.5rem;
}
</style>
