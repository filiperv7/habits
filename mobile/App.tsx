import { Loading } from './src/components/Loading'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold
  })

  if(!fontsLoaded) {
    return (
        <Loading />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.tsx to start working on your app! AAAHHH</Text>
      <StatusBar barStyle="light-content" backgroundColor="tranparent" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#F3FFF3',
    fontFamily: 'Inter_600SemiBold'
  }
});
