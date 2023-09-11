import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Icons = {
  MaterialIcons
};
interface IconProps {
  type: React.ComponentType<any>;
  name: string;
  color: string;
  size?: number;
  style?: object;
}
const Icon = ({type, name, color, size = 24, style}:IconProps) => {
  const fontSize = 24;
  const Tag = type;
  return (
    <>
      {type && name && (<Tag name={name} size={size || fontSize} color={color} style={style} /> )}
    </>
  );
};

export default Icon;
