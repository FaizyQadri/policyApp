import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setCreatedProfile} from '../../redux/reducers/authReducer';

const Signin = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          dispatch(
            setCreatedProfile({
              email: 'test@email',
              gender: 'Male',
              mobile: '7899898999',
              token: 'token',
            }),
          );
        }}>
        <Text style={styles.text}>Signin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    paddingHorizontal: 20,
    width: '100%',
    height: 60,
    borderRadius: 6,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '900',
  },
});
