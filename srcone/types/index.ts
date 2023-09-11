interface DrawerItemProps {
    label: string;
    onPress: () => void;
    tabBarTestID: string;
    type: React.ComponentType<any>;
    name: string;
    notification: number;
    color: string;
    activeItemColor: string | null;
  }
  interface ProjectItemProps {
    label: string;
    onPress: () => void;
    type: React.ComponentType<any>;
    name: string;
    color: string;
    activeItemColor: string;
  }
  
  interface ProfileMenuItemProps {
    label: string;
    onPress: () => void;
    type: React.ComponentType<any>;
    name: string;
    color: string;
  }