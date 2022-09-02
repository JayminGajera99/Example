import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {changeLogin} from '../redux/action';

const HomeScreen = ({navigation}) => {
  //useDispatch use//
  const dispatch = useDispatch();

  //useSelector use//
  const {uname, pwd, login} = useSelector(state => state.dataReducer);
  console.log('login state ===> ', login);

  //Submit button function//
  const onSubmit = async () => {
    await AsyncStorage.removeItem('userData');

    dispatch(changeLogin(false));

    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <Text>welcome {uname}</Text>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: '#4630EB',
          },
        ]}
        onPress={() => onSubmit()}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter UserName</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={actualdata => setUserName(actualdata)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter PassWord</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={actualdata => setPassword(actualdata)}
        />
      </View>

      <Button style={styles.buttonStyle} title="Click me" color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 100,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  buttonStyle: {
    height: 40,
    margin: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: '600',
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    fontFamily: 'regular',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontSize: 18,
  },
});
export default HomeScreen;
