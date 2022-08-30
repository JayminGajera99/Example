import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const onSubmit = async () => {
    console.log('username:', userName);
    console.log('password:', password);

    let objName = {
      username: userName,
      password: password,
    };

    // objName no variable object chhe, je asyncstorage ma store na thay, kem k ema khali string j store thay
    // etle JSON.stringify(objName) avi rite store krvu pde

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(objName));
      Alert.alert('Username and Password successful');
      navigation.navigate('Login');
    } catch (error) {
      console.log('saving data error', error);
    }

    // async setitem
    // if (userName === 'jaymin' && password === 'gajera') {
    //   Alert.alert(`Thank you ${userName}`)
    // } else {
    //   Alert.alert('UserName and Password are incorrect');
    // }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={actualdata => setUserName(actualdata)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={actualdata => setPassword(actualdata)}
        />
      </View>

      <View style={styles.Wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? '#4630EB' : undefined}
        />

        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: agree ? '#4630EB' : 'grey',
            },
          ]}
          disabled={!agree}
          onPress={() => onSubmit()}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 100,
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
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
  wrapper: {
    // paddingHorizontal: 10,
    // paddingVertical: 15,
    // paddingBottom: 30
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 360,
  },
  buttonStyle: {
    borderRadius: 5,
    height: 50,
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
});

export default RegisterScreen;
