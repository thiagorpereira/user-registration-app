import api from './api';

export const getUsersCall = async () => {
  try {
    const result = await api.get('/users');
    return result.data;
  } catch (error) {
    console.log({error});
    return error;
  }
};

export const saveUser = async data => {
  try {
    await api.post('/users', data);
    return data;
  } catch (error) {
    console.log({error});
    return error;
  }
};
