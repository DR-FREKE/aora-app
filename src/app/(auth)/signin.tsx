import { View, Text, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { images } from '@/constants';
import { PasswordField, TextField } from '@/components/widgets/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import AppButton from '@/components/widgets/button';
import { ForgotPasswordComp, NoAccountComp } from '@/components/auth/auth';

export type SignInProps = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { register, control, handleSubmit, formState } = useForm<SignInProps>({ mode: 'onChange' });
  const { errors, isDirty, isValid } = formState;

  const onSubmit: SubmitHandler<SignInProps> = async data => {
    //
    // router.push('(tabs)');
    console.log(data);
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
          <AppButton name="Log In" classname="mt-5" onPress={handleSubmit(onSubmit)} disabled={!isDirty || !isValid} />
        </KeyboardAvoidingView>
        <NoAccountComp path="/signup" />
      </View>
    </ScrollView>
  );
};

export default SignIn;
