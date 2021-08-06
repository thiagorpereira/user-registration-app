import create from 'zustand';

export const useUsersStore = create(set => ({
  usersList: [],
  setUsersList: usersList => set({usersList}),
  increaseUser: user => set(state => ({usersList: [...state.usersList, user]})),
}));
