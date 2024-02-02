import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import Logo from '../../Assets/Logo.png';
import { TouchableOpacity } from 'react-native';
import { Title } from '../../components/Title';
export default function Login() {
  const secoes = [
    {
      id: 1,
      titulo: 'Insira alguns dados básicos',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 1,
          label: 'Email',
          placeholder: 'Digite seu email'
        },
      ]
    }
  ]
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo Voll" />
      <Title >
        Cadastro
      </Title>
      <Box>
        {
        secoes[0].entradaTexto.map(entrada => {
          return <EntradaTexto label={entrada.label} placeholder = {entrada.placeholder} key={entrada.id}/>
        })
        }
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

