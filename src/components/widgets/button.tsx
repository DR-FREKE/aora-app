import { TouchableOpacity, Text, View } from 'react-native';
import React from 'react';
import { clsx } from 'clsx';

type AppButtonType = {
  name: string;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
  classname?: string;
  textClassName?: string;
  icon?: JSX.Element;
};

const AppButton = ({ name, loading, icon, disabled, onPress, classname, textClassName }: AppButtonType) => {
  return (
    <TouchableOpacity
      className={clsx('bg-secondary rounded-lg min-h-[62px] justify-center items-center', classname, loading || disabled ? 'opacity-50' : '')}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || loading}
    >
      <View className="flex-row items-center gap-2">
        {icon}
        <Text className={clsx('text-primary font-poppins-semi-bold text-lg', textClassName)}>{loading ? 'loading...' : name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
