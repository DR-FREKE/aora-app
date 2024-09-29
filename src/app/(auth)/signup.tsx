import { View, Text, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { images } from '@/constants';
import { PasswordField, TextField } from '@/components/widgets/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import AppButton from '@/components/widgets/button';
import { ForgotPasswordComp, NoAccountComp } from '@/components/auth/auth';
import { createUser } from '@/lib/appwrite/users/create.users';

export type SignUpProps = {
  username: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const { register, control, handleSubmit, formState, reset } = useForm<SignUpProps>({ mode: 'onChange' });
  const { errors, isDirty, isValid, isLoading } = formState;

  const onSubmit: SubmitHandler<SignUpProps> = async data => {
    // call appwrite function to create a user in Appwrite DB
    const { email, password, username } = data;
    createUser(email, password, username);

    // reset the form
    reset();
  };

  return (
    <ScrollView>
      <View className="w-full h-full justify-center px-4 my-6">
        <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]" />
        <Text className="text-white text-2xl mt-10 font-poppins-semi-bold">Sign up</Text>
        <View className="mt-5">
          <TextField label="Username" placeholder="Your unique username" control={control} {...register('username', { required: true })} />
          <TextField label="Email" type="email-address" control={control} placeholder="Your unique email" {...register('email', { required: true })} />
          <PasswordField label="Password" placeholder="Your unique password" control={control} {...register('password', { required: true })} />
          <AppButton name="Sign Up" classname="mt-5" onPress={handleSubmit(onSubmit)} disabled={!isDirty || !isValid} loading={isLoading} />
        </View>
        <NoAccountComp path="/signin" text="Already have an account?" link_text="Login" />
      </View>
    </ScrollView>
  );
};

export default SignUp;
