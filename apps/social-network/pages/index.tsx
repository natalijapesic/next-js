import React, { useEffect } from 'react';
import Header from '../components/header';
import { refreshUserStore } from '../features/auth/authenticationSlice';
import storeService from '../lib/api/storeService';
import { useAppDispatch } from '../lib/stores/hooks';
import { UserModel } from '../lib/types/user';

const Layout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user: UserModel | null = storeService.getUser();
    if (user) {
      dispatch(refreshUserStore(user));
    }
  }, [dispatch]);
  return <Header></Header>;
};

export default Layout;
