import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import COLOR from '../../Config/COLOR';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

// import firebaseConfig from '../../Config/firebaseConfig'

const SignupScreen = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const signup = () => {
    firestore()
      .collection('users')
      .add({
        name: userName,
        email: email,
        password: password,
      })
      .then(val => {
        console.log('User added!', val);
        navigation.navigate('HomeScreen', {
          userData: {
            name: userName,
            email: email,
            password: password,
          },
          // data: props.data,
        });
      });
  };
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={styles.appLogo}>
          <Image
            source={require('../../Images/appLogo.png')}
            style={[styles.mainImage, {}]}
            resizeMode="contain"
          />
        </View>
        <View style={styles.loginHeader}>
          <Text style={styles.loginHeadTxt}>Register</Text>
        </View>
        <View style={styles.textbox}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={text => setUserName(text)}
            value={userName}
          />
        </View>

        <View style={styles.textbox}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>

        <View style={styles.textbox}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={() => signup()}>
          <Text style={styles.loginTxt}>Register</Text>
        </TouchableOpacity>

        <View style={styles.NewUser}>
          <Text style={styles.noAccntTxt}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.registerNowBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
