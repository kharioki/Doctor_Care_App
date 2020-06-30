import React from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';

import {CardHome} from './HomeScreen';

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
          <Text>12 ml</Text>
        </View>
      </View>
    </View>
  );
};

const Map = () => {
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapView}
        region={{
          latitude: -1.261153,
          longitude: 36.803506,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: -1.261153,
            longitude: 36.803506,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <View
            style={{
              backgroundColor: '#EDE6EA',
              padding: 5,
              borderRadius: 40,
            }}>
            <View
              style={{
                backgroundColor: '#c49dbd',
                padding: 5,
                borderRadius: 20,
                shadowColor: '#714bb7',
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 1,
                shadowRadius: 20,
              }}>
              <LinearGradient
                style={styles.marker}
                colors={['#714B87', '#944787', '#984587']}>
                <Entypo name="user" color="#fff" />
              </LinearGradient>
            </View>
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

const ListCard = () => {
  return (
    <View>
      <CardHome
        title="Your Next Appointment"
        noHeader
        noFooter
        book
        info={{
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAxCiVB3o9i7-04KXexFIDpbxEhUkmxQ14KQ&usqp=CAU',
          name: 'Dr R Bruce Banner',
          time: 'Sunday, July 15th at 8:45 PM',
          address1: '87 Waiyaki Way',
          address2: 'Westlands, Nairobi 00800',
          isLike: true,
          rating: 4,
          tag: 'Wellness',
        }}
      />
      <CardHome
        title="Specialist in your area"
        noHeader
        noFooter
        book
        info={{
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiB83zs24_peVmkkZ-nKLrAzO5_ZbjJR_amg&usqp=CAU',
          name: 'Dr Hellen Cho',
          time: 'Avengers',
          address1: 'Dermatologists',
          address2: 'Westlands, NBO | 15min',
          isLike: true,
          rating: 4,
          tag: 'Wellness',
        }}
      />
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
    // padding: 15,
  },
  header: {
    marginTop: 20,
    padding: 15,
  },
  headerBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
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
    flex: 1,
  },
  mapView: {
    width: Dimensions.get('window').width,
    height: 250,
  },
  marker: {
    backgroundColor: '#6c4c86',
    padding: 10,
    borderRadius: 20,
  },
});
