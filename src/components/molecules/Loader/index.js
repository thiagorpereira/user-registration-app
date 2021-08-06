import React from 'react';
import {DetailText} from '../../atoms';
import {LoaderContainer, LoaderIndicator} from './styles';
import {colors} from '../../../styles/colors';

export const Loader = ({text}) => (
  <LoaderContainer>
    <LoaderIndicator size="large" color={colors.primary} />
    <DetailText>{text ? text : 'Carregando...'}</DetailText>
  </LoaderContainer>
);
