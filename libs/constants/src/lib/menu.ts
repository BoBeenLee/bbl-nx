export interface MenuItem {
  name: string;
  url: string;
}

export const menus: MenuItem[] = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Portfolio", url: "/portfolio" },
  { name: "Post", url: "/post" }
];
