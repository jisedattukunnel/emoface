import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import COLOR from '../../Config/COLOR';
import {useNavigation} from '@react-navigation/native';

const SuccessScrean = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '50%',
      }}>
      <Text
        style={{color: '#grey', fontSize: 14, fontFamily: 'Poppins-SemiBold'}}>
        Your Result
      </Text>
      <Text
        style={{
          fontFamily: 'Poppins-SemiBold',
          color: '#26A69A',
          fontSize: 35,
        }}>
        Moderate Risk
      </Text>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 5,
          height: 150,
          width: 150,
          borderRadius: 100,
        }}>
        <Text style={{fontSize: 70, color: '#000'}}>30</Text>
        <Text style={{color: 'grey', fontFamily: 'Poppins-SemiBold'}}>
          OUT OF 51
        </Text>
      </View>

      <View style={{marginTop: 150}}>
        <TouchableOpacity
          // onPress={() => navigation.navigate('HomeScreen')}
          style={{
            backgroundColor: COLOR.primary,
            width: 150,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 5,
          }}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 17,
            }}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessScrean;
