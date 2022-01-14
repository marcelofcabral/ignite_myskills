import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import styles from './styles';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

const SkillCard = ({skill, ...rest}: SkillCardProps) => (
  <TouchableOpacity style={styles.buttonSkill} {...rest}>
    <Text style={styles.textSkill}>{skill}</Text>
  </TouchableOpacity>
);

export default SkillCard;
