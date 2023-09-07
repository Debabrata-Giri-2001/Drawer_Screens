import { Icons } from "../assets/icons/Icons";
import DrawerScreen from "../screens/common/DrawerScreen";
import { colors } from "./Colors";

export const ScreensArray = [
  { route: 'Home', label: 'Home', type: Icons.MaterialIcons, icon: 'home', component: DrawerScreen, notification: 0, },
  { route: 'Inbox', label: 'My Inbox', type: Icons.MaterialIcons, icon: 'inbox', component: DrawerScreen, notification: 9, },
  { route: 'Calendar', label: 'My Calendar', type: Icons.MaterialIcons, icon: 'calendar-month', component: DrawerScreen, notification: 4, },
  { route: 'Documents', label: 'My Documents', type: Icons.MaterialIcons, icon: 'layers', component: DrawerScreen, notification: 0, },
  { route: 'Activity', label: 'My Activity', type: Icons.MaterialIcons, icon: 'pie-chart', component: DrawerScreen, notification: 2, },
  { route: 'Settings', label: 'Settings', type: Icons.MaterialIcons, icon: 'settings', component: DrawerScreen, notification: 0, },
];

export const ProjectsArray = [
  { title: "Personal", icon: "person", color: colors.icon1, iconType: Icons.MaterialIcons },
  { title: "travel", icon: "person", color: colors.icon2, iconType: Icons.MaterialIcons },
  { title: "Business", icon: "person", color: colors.icon3, iconType: Icons.MaterialIcons },
  { title: "Add", icon: "add", color: colors.icon4, iconType: Icons.MaterialIcons },
]

export const ProfileMenu = [
  { label: 'History', icon: 'history', iconType: Icons.MaterialIcons },
  { label: 'Rate', icon: 'star', iconType: Icons.MaterialIcons },
  { label: 'Share', icon: 'share', iconType: Icons.MaterialIcons },
  { label: 'Logout', icon: 'logout', iconType: Icons.MaterialIcons },
]