import { Text, useColorScheme, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
// import {} from '@expo-google-font';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { clsx } from 'clsx';
import 'react-native-url-polyfill/auto';
import GlobalProvider from '@/context/global-provider';

SplashScreen.preventAutoHideAsync(); // prevents splashscreen from auto hiding before our asset loading is complete. Hence the Splashscreen will continue to show until our fonts and other assets have loaded

const RootLayout = () => {
  const [darkmode, setDarkMode] = useState(true);
  const color_scheme = useColorScheme();
  const [fonts_loaded, error] = useFonts({
    'Poppins-ExtraLight': require('@/assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('@/assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Black': require('@/assets/fonts/Poppins-Black.ttf'),
    'Poppins-Medium': require('@/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('@/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('@/assets/fonts/Poppins-ExtraBold.ttf'),
  });

  // this is important so as to let the fonts be loaded first before the splashscreen can disappear.
  useEffect(() => {
    if (error) throw error;

    if (fonts_loaded) SplashScreen.hideAsync(); // basically hides the native splashscreen
  }, [fonts_loaded, error]);

  if (!fonts_loaded && !error) return null;

  return (
    <SafeAreaView className={clsx('h-full', darkmode ? 'bg-primary' : '')}>
      {/* <ThemeProvider value={color_scheme !== 'dark' ? DarkTheme : DefaultTheme}> */}
      <GlobalProvider>
        <Slot />
      </GlobalProvider>
      <StatusBar style={!darkmode ? 'dark' : 'light'} backgroundColor={darkmode ? '#161622' : '#F2F2F2'} />
      {/* </ThemeProvider> */}
    </SafeAreaView>
  );
};

export default RootLayout;
