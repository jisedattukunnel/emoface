import {StyleSheet} from 'react-native';
import COLOR from '../../Config/COLOR';
export default StyleSheet.create({
  loginHeader: {
    alignItems: 'center',
  },
  textbox: {
    backgroundColor: COLOR.grey3,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: COLOR.grey2,
    borderRadius: 5,
  },
  input: {
    paddingLeft: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  loginHeadTxt: {
    fontSize: 40,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 20,
    color:'grey',
  },
  appLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  loginBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.primary,
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  loginTxt: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 15,
  },
  NewUser: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 40,
    // flexDirection: 'row',
  },
  noAccntTxt: {
    fontFamily: 'Poppins-Regular',
    color:'grey',
  },
  registerNowBtn: {
    fontFamily: 'Poppins-SemiBold',
    color:'grey',
  },
});
