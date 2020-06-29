import React from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import BackgroundHeader from './src/components/BackgroundHeader';
import BottomTab from './src/components/BottomTab';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <BackgroundHeader />
        <ScrollView style={styles.scrollView}></ScrollView>
        <BottomTab />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f1f2',
  },
  scrollView: {
    flex: 1,
  },
});

export default App;
