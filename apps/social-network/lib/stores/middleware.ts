import storeService from '@lib/api/storeService';
import { UserModel } from '@lib/types/user';
import { Middleware } from '@reduxjs/toolkit';

interface PayloadType {
  user: UserModel;
  accessToken: string;
}

interface Response {
  payload: PayloadType;
  type: string;
}

const storeUser: Middleware = (store) => (next) => (action) => {
  const result: Response = next(action);

  switch (result.type) {
    case 'user/signInUser/fulfilled':
      storeService.setAccessToken(result.payload.accessToken);
      storeService.setUser(result.payload.user);
      break;
    case 'user/signUpUser/fulfilled':
      storeService.setAccessToken(result.payload.accessToken);
      storeService.setUser(result.payload.user);
      break;
    case 'user/signOut':
      storeService.signOut();
      break;
  }
};

export default storeUser;
