import type { NavMenu, NavMenuItems } from '~/types/nav';

export const navMenu: NavMenu[] = [
  {
    heading: 'Secciones',
    items: [
      {
        title: 'Dashboard',
        icon: 'i-lucide-layout-dashboard',
        link: '/',
      },
      {
        title: 'Voluntarios',
        icon: 'i-lucide-users',
        link: '/voluntarios',
      },
      {
        title: 'Tareas',
        icon: 'i-lucide-check-square',
        link: '/tareas',
      },
      {
        title: 'Eventos',
        icon: 'i-lucide-calendar',
        link: '/eventos',
      },
      {
        title: 'Coordinadores',
        icon: 'i-lucide-user-check',
        link: '/coordinadores',
      },
      {
        title: 'Reportes',
        icon: 'i-lucide-file-bar-chart',
        link: '/reportes',
      },
      {
        title: 'Notificaciones',
        icon: 'i-lucide-bell',
        link: '/notificaciones',
      },
      {
        title: 'Integraciones',
        icon: 'i-lucide-plug',
        link: '/integraciones',
      },
      {
        title: 'Configuraciones',
        icon: 'i-lucide-settings',
        link: '/configuraciones',
      },
    ],
  },
];

export const navMenuBottom: NavMenuItems = [
  {
    title: 'Help & Support',
    icon: 'i-lucide-circle-help',
    link: 'https://github.com/dianprata/nuxt-shadcn-dashboard',
  },
  {
    title: 'Feedback',
    icon: 'i-lucide-send',
    link: 'https://github.com/dianprata/nuxt-shadcn-dashboard',
  },
];
