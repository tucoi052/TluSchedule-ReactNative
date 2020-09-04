import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScheduleContext from '../../utils/contextprovider';
import {WaveIndicator} from 'react-native-indicators';

const Body = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const context = useContext(ScheduleContext);

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={loading}>
        <WaveIndicator size={170} color="#59D7FF" />
      </Modal>
      <Text style={styles.textLogin}>Đăng nhập</Text>
      <View style={styles.inputUser}>
        <Icon name="user" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Tài khoản"
          autoCapitalize={'none'}
          autoCompleteType={'off'}
          autoCorrect={false}
          onChangeText={(text) => {
            setUser(text);
          }}
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
          onChangeText={(text) => {
            setPass(text);
          }}
        />
      </View>
      <TouchableOpacity
        style={[shadow, styles.button]}
        onPress={async () => {
          if (user !== '' && pass !== '') {
            setLoading(true);
            if (!(await context.login(user, pass)))
              Alert.alert('Lỗi', 'Kiểm tra lại tài khoản mật khẩu', [
                {text: 'OK', onPress: () => {}},
              ]);
            else setLoading(false);
          } else
            Alert.alert('Lỗi', 'Không được để trống thông tin', [
              {text: 'OK', onPress: () => {}},
            ]);

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
    fontWeight: '900',
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
