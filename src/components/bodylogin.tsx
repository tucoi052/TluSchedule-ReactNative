import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Body = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Đăng nhập</Text>
      <View style={styles.inputUser}>
        <Icon name="user" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Tài khoản"
          autoCapitalize={'none'}
          autoCompleteType={'off'}
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputPass}>
        <Icon name="lock" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          autoCapitalize={'none'}
          autoCompleteType={'off'}
          autoCorrect={false}
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        style={[shadow, styles.button]}
        onPress={() => {
        }}>
        <Text style={styles.textButton}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '35%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#5B80FF',
  },
  inputUser: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    width: '60%',
    borderWidth: 0.8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: '7%',
  },
  inputPass: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    width: '60%',
    borderWidth: 0.8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight:'900'
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#4AB3FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7%',
  },
  input: {
    flex: 1,
  },
  icon: {
    paddingHorizontal: 10,
  },
});

const shadow = {
  shadowColor: '#30C1DD',
  shadowRadius: 10,
  shadowOpacity: 0.6,
  elevation: 8,
  shadowOffset: {
    width: 0,
    height: 4,
  },
};

export default Body;
