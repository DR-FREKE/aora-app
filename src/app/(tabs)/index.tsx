import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <View className="flex-1 justify-center items-center">
        <Text className="font-poppins-bold capitalize">Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
