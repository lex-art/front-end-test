import { IRoute } from "./typeMenuItem";
export const ROUTES: Array<IRoute> = [
  {
    icon: 'icon home',
    text: 'Item 1',
    role: ['admin'],
    subMenu: [
      {
        icon: 'icon settings',
        route: '/page-two',
        text: 'Sub Menu 1',
        role: ['admin'],
      }
    ],
  },
  {
    icon: 'icon user',
    route: '/page-one',
    text: 'Item 2',
    role: ['admin'],
  },
  {
    icon: 'icon settings',
    route: '/pagination',
    text: 'Paginación',
    role: ['admin'],
  },
  {
    icon: 'icon sing-out',
    text: 'Cerrar cession',    
    role: ['admin', 'user'],
    closeSeesion: true,
  },
];
