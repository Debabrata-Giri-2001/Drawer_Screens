type DrawerMenuType = {
  title: string;
  route: string;
  titleIcon:string;
  menuList: {title: string}[];
};

export const drawerMenu: DrawerMenuType[] = [
  {
    title: 'Settings',
    route: 'Settings',
    titleIcon:'https://cdn-icons-png.flaticon.com/512/4502/4502233.png',
    menuList: [{title: 'Change_Theme'}, {title: 'NotifyMe'}],
  },
  {
    title: "Todo's",
    route: 'Todo',
    titleIcon:'https://cdn-icons-png.flaticon.com/512/5804/5804623.png',
    menuList: [{title: 'Eat'}, {title: 'Code'}, {title: 'Sleep'}],
  },
  {
    title: 'News',
    route: 'News',
    titleIcon:'https://cdn-icons-png.flaticon.com/512/4764/4764439.png',
    menuList: [{title: 'All'}, {title: 'India'}, {title: 'Odisha'}],
  },
];
