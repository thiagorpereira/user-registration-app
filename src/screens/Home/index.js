import React, {useEffect, useState} from 'react';
import {Title, IconButton, Input, UserList, Loader} from '../../components';
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from './styles';
import {getUsersCall} from '../../services/calls';
import {useUsersStore} from '../../services/stores';

export const HomeScreen = ({navigation}) => {
  const {usersList, setUsersList} = useUsersStore();
  const [loading, setLoading] = useState(true);

  const callGetUsers = async () => {
    const result = await getUsersCall();
    setUsersList(result);
    setLoading(false);
  };
  useEffect(() => {
    callGetUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goUserForm = () => {
    navigation.navigate('UserForm');
  };

  return (
    <ScreenContainer>
      <UserList data={usersList} loading={loading}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>User App</Title>
            </TitleContainer>
            <IconButton iconName="add-circle-outline" onPress={goUserForm} />
          </TopContainer>
          {loading && <Loader />}
        </ContentContainer>
      </UserList>
    </ScreenContainer>
  );
};
