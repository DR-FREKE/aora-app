import React, { useState } from 'react';
import { KeyboardTypeOptions, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { Control, useController } from 'react-hook-form';
import { clsx } from 'clsx';
import { Eye, EyeSlash } from 'iconsax-react-native';

type TextFieldProps = {
  defaultValue?: string;
  label: string;
  type?: KeyboardTypeOptions;
  control?: Control<any>;
  placeholder?: string;
  name: string;
  className?: string;
  // onChange: ChangeHandler;
  // error?: SignUpErrorState[];
};
type Ref = TextInput;

export const TextField = React.forwardRef<Ref, TextFieldProps>(({ label, name, control, placeholder, type, className }, ref) => {
  const {
    field: { value, onChange },
  } = useController({ control, name });

  return (
    <View className={clsx('space-y-2 my-3.5', className)}>
      <Text className="text-base text-gray-100 font-poppins-medium">{label}</Text>
      <View className="w-full px-4 h-16 bg-black-100 border-2 border-black-200 rounded-lg focus:border-secondary">
        <TextInput
          value={value}
          autoCapitalize="none"
          onChangeText={onChange}
          placeholder={placeholder}
          keyboardType={type}
          className="flex-1 text-white font-poppins-semi-bold"
          placeholderTextColor={'#7B7B8B'}
        />
      </View>
    </View>
  );
});

export const PasswordField = React.forwardRef<Ref, TextFieldProps>(({ label, name, control, className, placeholder }, ref) => {
  const [visible, setVisible] = useState(false);
  const {
    field: { value, onChange },
  } = useController({ control, name });

  return (
    <View className={clsx('space-y-2 my-3.5', className)}>
      <Text className="text-base text-gray-100 font-poppins-medium">{label}</Text>
      <View className="w-full px-4 h-16 bg-black-100 border-2 border-black-200 rounded-lg focus:border-secondary flex-row items-center">
        <TextInput
          value={value}
          autoCapitalize="none"
          onChangeText={onChange}
          placeholder={placeholder}
          className="flex-1 text-white font-poppins-semi-bold"
          placeholderTextColor={'#7B7B8B'}
          secureTextEntry={!visible}
        />
        <TouchableOpacity onPress={() => setVisible(!visible)}>{!visible ? <Eye color="#7B7B8B" /> : <EyeSlash color="#7B7B8B" />}</TouchableOpacity>
      </View>
    </View>
  );
});
