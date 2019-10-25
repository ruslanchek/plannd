import React from 'react';
import { Image } from 'react-native';

interface IProps {
  size: number;
}

export const FacebookLogo: React.FC<IProps> = ({ size }) => {
  return (
    <Image
      source={require('../../assets/images/icons/facebook-logo.png')}
      style={{ width: size, height: size }}
    />
  );
};
