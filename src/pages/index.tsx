import { Input } from '../components/forms/Input';
import { Inter } from '@next/font/google'
import { Button, Flex, Stack } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail"/>
          <Input type="password" name="password" label="Senha"/>
        </Stack>
        <Button type='submit' mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
