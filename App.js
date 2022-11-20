import { useFonts } from 'expo-font';
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {
  const [fontsLoaded] = useFonts ({
    Poppins: require("./src/assets/fonts/Poppins-Italic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <ShopNavigator/>;
}

{/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/}
