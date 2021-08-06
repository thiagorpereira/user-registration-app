import React from 'react';
import {InputLabel} from '../../atoms/Text';
import {InputContainer, InputText} from './styles';
import {colors} from '../../../styles/colors';

export const Input = ({label, placeholder, ...props}) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputText
        {...props}
        placeholder={placeholder}
        placeholderTextColor={colors.greyDark}
      />
    </InputContainer>
  );
};
