import React from 'react';
import {UserCard} from '../../molecules';
import {UserListContainer} from './styles';

export const UserList = ({data, children}) => {
  return (
    <UserListContainer
      data={data}
      renderItem={({item}) => (
        <UserCard
          item={item}
          code={item.code}
          name={item.name}
          birth_date={item.birth_date}
          avatar={item.avatar}
        />
      )}
      keyExtractor={item => item.name}
      ListHeaderComponent={children}
    />
  );
};
