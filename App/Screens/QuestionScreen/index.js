import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import QUESTIONS from './questions';
import COLOR from '../../Config/COLOR';
import {useNavigation} from '@react-navigation/native';

const QuestionScreen = () => {
  const [qno, setQno] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {QUESTIONS.map(q => {
        if (q.id === qno) {
          return (
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  color: '#000',
                  fontSize: 25,
                }}>
                <Text style={{color: 'grey'}}>Q{q.id}.</Text> {q.question}
              </Text>

              <View style={{marginTop: 30}}>
                <TouchableOpacity
                  onPress={() =>
                    setSelectedOption(
                      selectedOption === q.options.opt1 ? '' : q.options.opt1,
                    )
                  }
                  style={{
                    marginVertical: 10,
                    backgroundColor:
                      selectedOption === q.options.opt1 ? COLOR.primary : null,
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      color:
                        selectedOption === q.options.opt1 ? '#fff' : 'grey',
                      fontSize: 20,
                    }}>
                    A. {q.options.opt1}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    setSelectedOption(
                      selectedOption === q.options.opt2 ? '' : q.options.opt2,
                    )
                  }
                  style={{
                    marginVertical: 10,
                    backgroundColor:
                      selectedOption === q.options.opt2 ? COLOR.primary : null,
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      color:
                        selectedOption === q.options.opt2 ? '#fff' : 'grey',
                      fontSize: 20,
                    }}>
                    B. {q.options.opt2}
                  </Text>
                </TouchableOpacity>
                {q.options.opt3 ? (
                  <TouchableOpacity
                    onPress={() =>
                      setSelectedOption(
                        selectedOption === q.options.opt3 ? '' : q.options.opt3,
                      )
                    }
                    style={{
                      marginVertical: 10,
                      backgroundColor:
                        selectedOption === q.options.opt3
                          ? COLOR.primary
                          : null,
                      flexDirection: 'row',
                      borderWidth: 1,
                      borderRadius: 5,
                      paddingHorizontal: 10,
                      paddingVertical: 4,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-SemiBold',
                        color:
                          selectedOption === q.options.opt3 ? '#fff' : 'grey',
                        fontSize: 20,
                      }}>
                      C. {q.options.opt3}
                    </Text>
                  </TouchableOpacity>
                ) : null}

                {q.options.opt4 ? (
                  <TouchableOpacity
                    onPress={() =>
                      setSelectedOption(
                        selectedOption === q.options.opt4 ? '' : q.options.opt4,
                      )
                    }
                    style={{
                      marginVertical: 10,
                      backgroundColor:
                        selectedOption === q.options.opt4
                          ? COLOR.primary
                          : null,
                      flexDirection: 'row',
                      borderWidth: 1,
                      borderRadius: 5,
                      paddingHorizontal: 10,
                      paddingVertical: 4,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-SemiBold',
                        color:
                          selectedOption === q.options.opt4 ? '#fff' : 'grey',
                        fontSize: 20,
                      }}>
                      D. {q.options.opt4}
                    </Text>
                  </TouchableOpacity>
                ) : null}
              </View>

              {q.id === 14 ? (
                <View style={{marginTop: 40}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('SuccessScreen');
                    }}
                    style={{
                      backgroundColor: '#29B6F6',
                      paddingVertical: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 17,
                      }}>
                      Finish
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{marginTop: 40}}>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedOption('');
                      setQno(qno + 1);
                    }}
                    style={{
                      backgroundColor: '#29B6F6',
                      paddingVertical: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 17,
                      }}>
                      Next
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        }
      })}
    </View>
  );
};

export default QuestionScreen;
