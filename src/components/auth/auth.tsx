import { View, Text, TouchableOpacity } from 'react-native';
import { clsx } from 'clsx';
import { Link } from 'expo-router';

export const NoAccountComp = ({ path, text, link_text }: { path: string; text?: string; link_text?: string }) => (
  <View className={clsx('justify-center pt-5 flex-row gap-1')}>
    <Text className="text-white font-poppins text-sm">{text ?? "Don't have an account?"}</Text>
    <Link href={path}>
      <Text className="text-secondary font-poppins-semi-bold">{link_text ?? 'Signup'}</Text>
    </Link>
  </View>
);

export const ForgotPasswordComp = ({ path }: { path: string }) => (
  <View className="justify-end flex-row pb-2">
    <Link href={path}>
      <Text className="text-gray-100">Forgot Password ?</Text>
    </Link>
  </View>
);
