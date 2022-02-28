import React, { useContext, useState } from 'react';
import { 
  Background, 
  Container, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubmitText,
} from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';


export default function SignUp() {
   
  const { signUp } = useContext(AuthContext)
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  function hanleSignUp(){
    signUp(name, email, password)
  }

 return (
   <Background>
     <Container>

      <AreaInput>
        <Input
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="none"
          value={name}
          onChangeText={ (text) => setName(text) }
        />
      </AreaInput>

      <AreaInput>
        <Input
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ (text) => setEmail(text) }
        />
      </AreaInput>

      <AreaInput>
        <Input
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={ (text) => setPassword(text) }
        />
      </AreaInput>

      <SubmitButton onPress={hanleSignUp}>
        <SubmitText>Acessar</SubmitText>
      </SubmitButton>

     </Container>
   </Background>
  );
}