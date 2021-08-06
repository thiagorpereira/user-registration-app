import React, {useEffect, useState} from 'react';
import {TextInputMask} from 'react-native-masked-text';
import {
  IconButton,
  DetailSectionTitle,
  DetailSubtitle,
  DetailText,
  DetailTitle,
  Loader,
  HouseFeatureCard,
  Input,
  Title,
} from '../../components';
import {parse} from 'date-fns';
import {saveUser} from '../../services/calls';
import {ScreenContainer, SubmitContainer} from './styles';
import {useUsersStore} from '../../services/stores/users';

export const UserFormScreen = ({navigation}) => {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [loading, setLoading] = useState(false);

  const {increaseUser} = useUsersStore();

  const callSaveUser = async () => {
    setLoading(true);
    const result = await saveUser({
      name,
      code,
      birth_date: parse(birth, 'dd/MM/yyyy', new Date()),
    });

    if (result) {
      increaseUser(result);
    }

    setLoading(false);
    navigation.goBack();
  };
  const handleSubmit = () => {
    callSaveUser();
  };

  const onClickArrowBack = () => {
    navigation.goBack();
  };
  return (
    <ScreenContainer>
      <IconButton onPress={onClickArrowBack} iconName="chevron-back" />
      <Title mb={24}>Cadastrar Usuário</Title>
      <Input
        label="Código"
        placeholder="Digite o Código"
        value={code}
        onChangeText={setCode}
      />
      <Input
        label="Nome"
        placeholder="Digite o Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInputMask
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY',
        }}
        label="Data de Nascimento"
        name="data_ini"
        value={birth}
        keyboardType="numeric"
        placeholder="Data de Nascimento"
        onChangeText={text => setBirth(text)}
        style={{fontSize: 18}}
      />

      <SubmitContainer>
        <DetailText>Enviar</DetailText>
        <IconButton iconName="send" onPress={handleSubmit} />
      </SubmitContainer>

      {loading && <Loader />}
    </ScreenContainer>
  );
};
