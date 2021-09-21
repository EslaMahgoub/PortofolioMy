// return menu object of all routes

interface Menu {
  label: string;
  route: string;
  active: boolean;
}
const isRouteActive = (route: string) => {
  // compare the route with the url
  const isActive = route === window.location.pathname
   || window.location.pathname.includes(route)
  return isActive
}

export const useMenu = ():Menu[] => {
  const menu = [
    { label: 'about', route:'/about', active: isRouteActive('/about')},
    { label: 'contact', route: '/contact', active: isRouteActive('/contact')},
  ]

  return menu
} 