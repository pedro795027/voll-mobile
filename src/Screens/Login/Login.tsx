import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import Logo from '../../Assets/Logo.png';
import { TouchableOpacity } from 'react-native';
import { Title } from '../../components/Title';
export default function Login() {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo Voll" />
      <Title >
        Faça login em sua conta
      </Title>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input placeholder='Digite o endereço de E-mail'
            size='lg'
            width="100%"
            borderRadius='lg'
            bgColor='gray.100'
            shadow={3}
          />
        </FormControl>
        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input placeholder='Digite a senha'
            size='lg'
            width="100%"
            borderRadius='lg'
            bgColor='gray.100'
            shadow={3}
          />
        </FormControl>
      </Box>
      <Button
        w="100%"
        bg="blue.800"
        mt={10}
        borderRadius="lg"
      >
        Entrar
      </Button>
      <Link href='https://www.alura.com.br'
        mt={5}
      >
        Esqueceu sua senha?
      </Link>
      <Box
        w="100%"
        flexDirection="row"
        justifyContent="center"
        mt={2}
      >
        <Text> Ainda não tem cadastro? </Text>
        <TouchableOpacity>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

