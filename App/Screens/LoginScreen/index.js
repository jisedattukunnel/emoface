import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import COLOR from '../../Config/COLOR';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const [warning, setWarning] = useState(false);
  // const [data, setData] = useState({});
  const navigation = useNavigation();

  const login = async () => {
    console.log(email);
    console.log(password);
    navigation.navigate('QuestionScreen');
    // const user = await firestore().collection('users').doc(email === user.email).get();
    // console.log(user);
    // firestore()
    //   .collection('users')
    //   .doc(email)
    //   .get()
    //   .then(documentSnapshot => {
    //     console.log('User exists: ', documentSnapshot.exists);

    //     if (documentSnapshot.exists) {
    //       console.log('User data: ', documentSnapshot.data());
    //     }
    //   });
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
          <Text style={styles.loginHeadTxt}>Login</Text>
        </View>
        <View style={styles.textbox}>
          <TextInput
            onChangeText={text => setEmail(text)}
            style={styles.input}
            placeholder="Username"
            placeholderTextColor={'grey'}
          />
        </View>

        <View style={styles.textbox}>
          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            placeholderTextColor={'grey'}
          />
        </View>
        <TouchableOpacity onPress={() => login()} style={styles.loginBtn}>
          <Text style={styles.loginTxt}>Login</Text>
        </TouchableOpacity>

        <View style={styles.NewUser}>
          <Text style={styles.noAccntTxt}>Do not have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={styles.registerNowBtn}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
