import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const onSubmit = async () => {
    await AsyncStorage.removeItem('userData');
    navigation.navigate('Login');
  };
  return (
    <View>
      <Text>HomeScreen</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 10,
    borderRadius: 3,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: 'bold',
  },
});
export default HomeScreen;
