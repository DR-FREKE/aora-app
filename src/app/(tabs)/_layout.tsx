import { Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import { Tabs } from 'expo-router';
import { Home, AddCircle, Profile, Archive } from 'iconsax-react-native';
import { clsx } from 'clsx';

type IconVariant = 'Bold' | 'Outline';
type IconType = {
  icon: any;
  focused: boolean;
  name: string;
  color?: string;
};

const icon_style = {
  variant: 'Bold' as IconVariant,
  size: 24,
};

const TabIcon = ({ icon, focused, name, color }: IconType) => (
  <View className="items-center justify-center gap-2">
    {React.createElement(icon, { ...icon_style, color: focused ? '#FFA001' : color ?? '#CDCDE0' })}
    <Text className={clsx(focused ? 'text-secondary font-poppins-semi-bold' : 'text-[#CDCDE0] font-poppins')}>{name}</Text>
  </View>
);

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon icon={Home} focused={focused} name="Home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ color, focused }) => <TabIcon icon={AddCircle} focused={focused} name="Create" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => <TabIcon icon={Profile} focused={focused} name="Profile" />,
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmarks',
          tabBarIcon: ({ color, focused }) => <TabIcon icon={Archive} focused={focused} name="Saved" />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
