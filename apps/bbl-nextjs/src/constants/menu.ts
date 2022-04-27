export interface IMenu {
  name: string;
  url: string;
}

const menus = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Portfolio', url: '/portfolio' },
  { name: 'Post', url: '/post' },
];

export const isHome = (url: string) => {
  if (url === '/') {
    return true;
  }
  return false;
};

export default menus;
