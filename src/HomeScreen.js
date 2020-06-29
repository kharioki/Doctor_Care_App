import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const Face = ({icon, title, color, full}) => {
  return (
    <View style={styles.faceGroup}>
      {full ? (
        <View style={{backgroundColor: color, borderRadius: 40}}>
          <Icon name={icon} size={36} color={'#fff'} />
        </View>
      ) : (
        <Icon name={icon} size={36} color={color} />
      )}
      <Text style={[styles.faceText, {color}]}>{title}</Text>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Hi Tony</Text>
        <Text style={styles.description}>How are you feeling today?</Text>
      </View>
      <View style={styles.faceContainer}>
        <Face icon="laughing" title="Great" color="#e23f9c" />
        <Face icon="slightly-smile" title="Good" color="#c55696" />
        <Face icon="neutral" title="Okey" color="#e23f9c" full />
        <Face icon="frowning" title="Bad" color="#827791" />
        <Face icon="expressionless" title="Awful" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    paddingHorizontal: 30,
    marginTop: 52,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
    marginTop: 5,
  },
  faceContainer: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 20,
  },
  faceGroup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceText: {
    fontSize: 16,
    marginTop: 6,
  },
});
