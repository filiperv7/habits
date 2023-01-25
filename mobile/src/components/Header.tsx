import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from "react-native";
import colors from 'tailwindcss/colors';

import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />

      <TouchableOpacity
        activeOpacity={0.5}

        className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center hover:border-violet-800"
      >
        <Feather 
          name="plus" 
          size={24} 
          color={colors.violet[500]}
        />

        <Text className='text-white ml-3 font-semibold text-base'>
          Novo
        </Text>
      </TouchableOpacity>
    </View>
  )
}