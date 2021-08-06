import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  CardTitle,
  CardHightLightText,
  CardFileText,
  CardDescription,
  CardHightLightTextWhite,
} from '../../atoms/Text';
import {useUsersStore} from '../../../services/stores';
import Moment from 'moment';
import {
  CardContainer,
  CardImage,
  TextContainer,
  ContainerDate,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const UserCard = ({code, name, birth_date, avatar}) => {
  const navigator = useNavigation();
  const {setSelectedUser} = useUsersStore();

  const onClickItemContainer = () => {
    // navigator.navigate('Detail', { selectedHouse: item });
  };

  return (
    <CardContainer onPress={onClickItemContainer}>
      <CardImage
        source={{uri: 'https://avatars.githubusercontent.com/u/1024025?v=4'}}
      />
      <TextContainer>
        <CardTitle>{name}</CardTitle>

        <CardDescription>{code}</CardDescription>

        <CardDescription mt={20}>Avatar File</CardDescription>
        {avatar && <CardFileText>{avatar}</CardFileText>}

        <CardDescription mt={20}>Data de Nascimento</CardDescription>
        <ContainerDate>
          <CardHightLightTextWhite>
            {Moment.utc(birth_date).format('DD/MM/YYYY')}
          </CardHightLightTextWhite>
        </ContainerDate>
      </TextContainer>
    </CardContainer>
  );
};
