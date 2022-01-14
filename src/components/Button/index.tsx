import React from 'react';
import styles from './styles';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

type ButtonProps = {
  type: 'add' | 'delete';
  text: string;
} & TouchableOpacityProps;

const Button = ({type, text, ...rest}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={(styles as any)[type + 'Button']} // tried to set styles as a less generic type, but the compiler wouldn't accept
      {...rest}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
