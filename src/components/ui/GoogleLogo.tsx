import React from 'react';
import { Image } from 'react-native';

interface IProps {
  size: number;
}

export const GoogleLogo: React.FC<IProps> = ({ size }) => {
  return (
    <Image source={require('../../assets/google-logo.png')} style={{ width: size, height: size }} />
  );
};
