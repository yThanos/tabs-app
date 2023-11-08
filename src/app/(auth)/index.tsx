
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { useContext } from 'react';
import { AuthContext } from '../../auth.context';

const LoginScreen = () => {
    const { login } = useContext(AuthContext)
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const router = useRouter();

    const handleForgotPassword = () => {
        router.push('forgot');
    };

    return (
        <View style={styles.container}>
            <TextInput
                //mode='outlined'
                label="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                //mode='outlined'
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button mode="contained" onPress={login} style={styles.button}>
                Login
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
