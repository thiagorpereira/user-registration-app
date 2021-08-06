import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../styles/colors';

import {IconButtonContainer} from './styles';

export const IconButton = ({transparent, iconName, onPress}) => {
  return (
    <IconButtonContainer onPress={onPress} transparent={transparent}>
      <Icon name={iconName} color={colors.primary} size={30} />
    </IconButtonContainer>
  );
};
