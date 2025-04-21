<script setup lang="ts">
import type { NavGroup, NavLink, NavSectionTitle } from '~/types/nav'
import { navMenu } from '~/constants/menus'

function resolveNavItemComponent(item: NavLink | NavGroup | NavSectionTitle): any {
  if ('children' in item)
    return resolveComponent('LayoutSidebarNavGroup')

  return resolveComponent('LayoutSidebarNavLink')
}

const user = {
  name: 'Dian Pratama',
  email: 'dianpratama2@gmail.com',
  avatar: '/avatars/avatartion.png',
}

const { sidebar } = useAppSettings()
</script>

<template>
  <Sidebar :collapsible="sidebar.collapsible" :side="sidebar.side" :variant="sidebar.variant">
    <!-- Sidebar Header -->
    <SidebarHeader>
      <div class="flex items-center gap-2 p-4">
        <img src="/logo.png" alt="Logo" class="h-8 w-10">
        <h1 class="bg-clip-text bg-gradient-to-r font-bold text-lg text-transparent from-[#3DA5D9] via-[#1C8AC0] to-[#4BC379]">
          VOLUNTRACKER
        </h1>
      </div>
    </SidebarHeader>

    <!-- Sidebar Content -->
    <SidebarContent>
      <SidebarGroup v-for="(nav, indexGroup) in navMenu" :key="indexGroup">
        <SidebarGroupLabel v-if="nav.heading">
          {{ nav.heading }}
        </SidebarGroupLabel>
        <component :is="resolveNavItemComponent(item)" v-for="(item, index) in nav.items" :key="index" :item="item" />
      </SidebarGroup>
    </SidebarContent>

    <!-- Sidebar Footer -->
    <SidebarFooter>
      <LayoutSidebarNavFooter :user="user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>