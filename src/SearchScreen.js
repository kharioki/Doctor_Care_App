import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View style={styles.header}>
      <AntDesign name="left" color="#fff" size={30} />
      <View style={styles.headerBody}>
        <Text style={styles.headerText}>Search</Text>
        <View style={styles.headerRightContainer}>
          <Entypo name="map" size={25} color="#fff" />
          <Ionicons
            name="ios-options"
            size={25}
            color="#fff"
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.groupInputs}>
        <View style={styles.wrapperInput}>
          <AntDesign name="search1" size={18} />
          <TextInput style={styles.inputText} value="Hellen Cho" />
        </View>
        <View style={styles.wrapperInput}>
          <Feather name="map-pin" size={18} color="gray" />
          <TextInput
            style={[styles.inputText, {color: '#9770a3'}]}
            value="Current Location"
          />
        </View>
      </View>
    </View>
  );
};

const Map = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

const ListCard = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Map />
      <ListCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    marginTop: 30,
  },
  headerBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerRightContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
  },
  groupInputs: {},
  wrapperInput: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  inputText: {
    padding: 10,
  },
});
