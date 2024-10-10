import { View, Text } from 'react-native';
import React from 'react';
import { Redirect, Slot } from 'expo-router';
import { useGlobalContext } from '@/context/global-provider';

const AuthLayout = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="(tabs)" />;

  return (
    <>
      <Slot />
    </>
  );
};

export default AuthLayout;
