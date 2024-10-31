import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Layout } from '@ui-kitten/components';

const Home = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-poppins-bold capitalize">Home</Text>
    </View>
  );
};

export default Home;
