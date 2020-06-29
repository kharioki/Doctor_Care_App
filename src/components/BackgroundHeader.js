import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const W = Dimensions.get('window').width;

/**
 * Create Background Gradient
 */

export default function BackgroundHeader() {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.linearGradient}
      colors={['#5d0e7f', '#7a007e', '#9c007f']}>
      <View style={styles.line}></View>
      <View style={[styles.line, {top: 130, left: -150}]}></View>
      <View style={[styles.line, {top: 160, left: 0}]}></View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    height: (W * 3) / 4,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
  },
  line: {
    position: 'absolute',
    width: W,
    top: 100,
    left: -300,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: [
      {
        rotate: '-35deg',
      },
    ],
    borderRadius: 60,
  },
});
