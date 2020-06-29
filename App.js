import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import BackgroundHeader from './src/components/BackgroundHeader';
import BottomTab from './src/components/BottomTab';
import HomeScreen from './src/HomeScreen';
import SearchScreen from './src/SearchScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <BackgroundHeader style={styles.bg} />
        <ScrollView style={styles.scrollView}>
          {/*<HomeScreen />*/}
          <SearchScreen />
        </ScrollView>
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
  bg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 250,
  },
  scrollView: {
    flex: 1,
  },
});

export default App;
