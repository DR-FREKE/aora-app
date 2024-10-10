import { View, Text, ScrollView, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import React, { useState } from 'react';
import { images } from '@/constants';
import { PasswordField, TextField } from '@/components/widgets/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import AppButton from '@/components/widgets/button';
import { ForgotPasswordComp, NoAccountComp } from '@/components/auth/auth';
import { signIn } from '@/lib/appwrite/users/signin.users';
import { router } from 'expo-router';
import { useGlobalContext } from '@/context/global-provider';

export type SignInProps = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { setIsLoggedIn, setUser } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);
  const { register, control, handleSubmit, formState, reset } = useForm<SignInProps>({ mode: 'onChange' });
  const { errors, isDirty, isValid } = formState;

  const onSubmit: SubmitHandler<SignInProps> = async data => {
    setIsLoading(true);

    try {
      // call appwrite function to sign the user in
      const { email, password } = data;
      const result = await signIn(email, password);

      // set to global state using context API
      setUser(result);
      setIsLoggedIn(true);

      router.replace('(tabs)');
    } catch (error: any) {
      Alert.alert(error.message);
    } finally {
      setIsLoading(false);
      // reset the form
      reset();
    }
  };

  return (
    <ScrollView>
      <View className="w-full h-full justify-center px-4 my-6">
        <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]" />
        <Text className="text-white text-2xl mt-10 font-poppins-semi-bold">Sign in</Text>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'} className="mt-3">
          <TextField label="Email" type="email-address" control={control} placeholder="Your unique email" {...register('email', { required: true })} />
          <PasswordField label="Password" placeholder="Your unique password" control={control} {...register('password', { required: true })} />
          <ForgotPasswordComp path="/forgot-password" />
          <AppButton name="Log In" classname="mt-5" onPress={handleSubmit(onSubmit)} disabled={!isDirty || !isValid} loading={isLoading} />
        </KeyboardAvoidingView>
        <NoAccountComp path="/signup" />
      </View>
    </ScrollView>
  );
};

export default SignIn;
