import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import COLOR from '../../Config/COLOR';

const Home = ({route}) => {
  const navigation = useNavigation();
  const [user, setUSer] = useState({});
  const {userData} = route.params;
  useEffect(() => {
    setUSer(userData);
  }, []);

  console.log('User: ' + user);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontFamily: 'Poppins-SemiBold',
          fontSize: 20,
          // marginVertical: 40,
          color: '#000',
        }}>
        Welcome {user.name}
      </Text>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
          marginBottom: 50,
          // width: '70%',
        }}>
        <Text
          style={{fontFamily: 'Poppins-SemiBold', fontSize: 13, color: 'grey'}}>
          Please press the Start Button to begin the questions.
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: COLOR.primary,
          paddingVertical: 10,
          paddingHorizontal: 50,
          borderRadius: 5,
        }}
        onPress={() => navigation.navigate('QuestionScreen')}>
        <Text
          style={{
            color: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Poppins-SemiBold',
          }}>
          Start
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
