import { VStack, Image, Text} from 'native-base';
import Logo from '../../Assets/Logo.png';

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Text
      fontSize="lg"
      >
        Faça login em sua conta
      </Text>
    </VStack>
  );
}

