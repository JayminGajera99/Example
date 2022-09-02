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
import {changeLogin, homePassword} from '../redux/action';

const HomeScreen = ({navigation}) => {
  //useDispatch use//
  const dispatch = useDispatch();
  //useSelector use//
  const {uname, pwd, login} = useSelector(state => state.dataReducer);

  const [password, setPassword] = useState('');
  const [newPwd, setNewPwd] = useState('');

  //Logout button function//
  const onLogout = async () => {
    await AsyncStorage.removeItem('userData');
    dispatch(changeLogin(false));
    navigation.navigate('Login');
  };

  //Clickme button function use//
  const onChangePwdPress = () => {
    // e pela apde check krvanu chhe k user no juno pwd hato e atyare usre textbox ma nakhyo e same chhe k nai
    // etle pela redux mathi juno pwd get krvano

    if (pwd === password) {
      // ahiya password chhe e usere je juno pwd nakhel chhe e chhe
      dispatch(homePassword(newPwd));
    } else {
      alert('your old pwd is wrong');
    }
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
        onPress={() => onLogout()}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="enter old pwd"
          onChangeText={txt => setPassword(txt)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.inputStyle, {marginBottom: 10}]}
          placeholder="enter new pwd"
          onChangeText={txt => setNewPwd(txt)}
        />
      </View>

      <Button
        style={styles.buttonStyle}
        onPress={onChangePwdPress}
        title="Click me"
        color="blue"
      />

      <Text>current user pwd: {pwd}</Text>
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
