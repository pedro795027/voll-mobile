import Register from './src/Screens/Register';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEME } from './src/Styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar  barStyle="dark-content" backgroundColor="transparent" translucent={true}/>
      <Register />
    </NativeBaseProvider>
  );
}
