import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

const Background = () => {
  return (
    <ImageBackground
      source={require('./../../assets/bg.png')}
      style={styles.images}
    />
  );
};

const styles = StyleSheet.create({
  images: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Background;
