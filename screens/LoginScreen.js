import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Fake login for demo
    navigation.navigate('LoadList');
  };

  return (
    <ImageBackground
      source={require('../assets/login-bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.overlay}
      >
        <Text style={styles.title}>CIM LOGISTICS PRO</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#00f0ff"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#00f0ff"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.forgot}>FORGOT PASSWORD?</Text>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  title: {
    fontSize: 30,
    color: '#00f0ff',
    fontWeight: 'bold',
    marginBottom: 40,
    textShadowColor: '#00f0ff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
    letterSpacing: 1,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#00f0ff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderColor: '#00f0ff',
    borderWidth: 1.2,
  },
  button: {
    width: '100%',
    backgroundColor: '#00f0ff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgot: {
    color: '#00f0ff',
    fontSize: 12,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
