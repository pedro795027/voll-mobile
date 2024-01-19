import Login from './src/Screens/Login/Login';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEME } from './src/Styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar  backgroundColor={THEME.colors.blue[800]}/>
      <Login />
    </NativeBaseProvider>
  );
}
