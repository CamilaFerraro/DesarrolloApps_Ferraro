import { useFonts } from 'expo-font';
import MainNavigator from "./src/navigation"
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  const [fontsLoaded] = useFonts ({
    Poppins: require("./src/assets/fonts/Poppins-Italic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
};
