import { Image, Platform, ScrollView, Text, View } from 'react-native';
import { router, Redirect } from 'expo-router';
import { images } from '@/constants';
import AppButton from '@/components/widgets/button';
import { clsx } from 'clsx';
import { useGlobalContext } from '@/context/global-provider';

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="(tabs)" />;

  // function to navigate to the sign in screen
  const handleNavigate = () => {
    router.push('/signin');
  };

  return (
    <ScrollView contentContainerStyle={{ height: '100%' }}>
      <View className={clsx('h-full w-full px-4 items-center')}>
        <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain" />
        <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain" />
        <View className="relative mt-5">
          <Text className={clsx('text-3xl text-white text-center', Platform.OS === 'ios' ? 'font-poppins-semi-bold' : 'font-poppins-medium')}>
            Discover Endless Possibilities with <Text className="text-secondary-200">Aora</Text>
          </Text>
          <Image source={images.path} className="w-[136px] h-[15px] absolute -bottom-2 -right-8" resizeMode="contain" />
        </View>
        <Text className="text-gray-100 text-center text-sm font-poppins mt-7">Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>

        <AppButton name="Continue with Email" classname="w-full mt-7" onPress={handleNavigate} />
      </View>
    </ScrollView>
  );
}
