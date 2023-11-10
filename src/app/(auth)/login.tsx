
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Text, HelperText } from 'react-native-paper';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth.context';
import { object, string } from 'yup';

const LoginScreen = () => {
    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);

    const router = useRouter();

    console.log(login)

    const handleLogin = async () => {
      if(!emailSchema.isValidSync({email})){
        setError(true);
        return;
      }
      if(email == 'admin@teste.com' && password == 'admin'){
        await login({name: 'Admin', email: 'admin', token: "Bearer token123"});
        router.push('home');
      } else {
        alert("Usuário ou senha inválidos");
      }
    }

    const handleForgotPassword = () => {
        router.push('forgot');
    };

    const emailSchema = object({email: string().email().required()})

    return (
        <View style={styles.container}>
            <TextInput
                keyboardType='email-address'
                label="Email"
                autoCapitalize='none'
                value={email}
                error={error}
                onChangeText={(text)=>{
                  setEmail(text);
                  setError(false);
                }}
                style={styles.input}
                
            />
            <HelperText type="error" visible={error} style={{alignSelf: "flex-start", marginTop: -20, marginBottom: 10}}>
                Email inválido!
            </HelperText>
            <TextInput
                label="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                style={styles.input}
                autoCapitalize='none'
                right={<TextInput.Icon icon={showPassword?"eye-off":"eye"} onPress={() => {setShowPassword(!showPassword)}} />}
            />
            <Button mode="contained" onPress={handleLogin} style={styles.button}>
                Logar
            </Button>
            <Button onPress={handleForgotPassword}>
                <Text>Esqueceu a senha?</Text>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    marginBottom: 16,
  },
  button: {
    width: '100%',
  },
});

export default LoginScreen;
