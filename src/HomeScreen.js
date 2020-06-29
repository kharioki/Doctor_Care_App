import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

const Rating = ({rating}) => {
    return (
        <View style={styles.rating}>
          {Array(5)
            .fill(0)
            .map((_, i) => {
                if(rating > i){
                    return <AntDesign name='star' color='#fa8d00' key={i} style={{marginRight: 5}} />
                }
              return <AntDesign name='staro' key={i} style={{marginRight: 5}} />
          })}
        </View>
    )
}

const CardHome = ({title, info}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeaderContainer}>
        <Text style={styles.cardHeading}>{title}</Text>
        <Text style={styles.cardMore}>See All</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.cardBodyTop}>
          <Image
            style={styles.cardAvatar}
            source={{
              uri: info.avatar
            }}
          />
          <View style={styles.cardLeftSide}>
            <Text style={styles.tag}>{info.tag}</Text>
            <Text style={styles.cardName}>{info.name}</Text>
            <Text style={styles.cardTime}>{info.time}</Text>
            <Text style={styles.cardAddress}>{info.address1}</Text>
            <Text style={styles.cardAddress}>{info.address2}</Text>
            {info.rating && <Rating rating={info.rating} />}
            <View style={styles.iconMore}>
              <Icon name="angle-right" color="gray" />
            </View>
            {info.isLike && <View style={styles.iconLike}>
              <Icon name="heart" color="#e8008d" size={22} />
            </View>}
          </View>
        </View>
        <View style={styles.margin}></View>
        <View style={styles.cardBodyBottom}>
          <View style={styles.cardGroupIcon}>
            <AntDesign name="checkcircleo" size={36} />
            <Text style={styles.cardBottomText}>Check In</Text>
          </View>
          <View style={styles.cardGroupIcon}>
            <AntDesign name="closecircleo" size={36} />
            <Text style={styles.cardBottomText}>Cancel</Text>
          </View>
          <View style={styles.cardGroupIcon}>
            <AntDesign name="calendar" size={36} />
            <Text style={styles.cardBottomText}>Calendar</Text>
          </View>
          <View style={styles.cardGroupIcon}>
            <MaterialCommunityIcons name="compass-outline" size={36} />
            <Text style={styles.cardBottomText}>Directions</Text>
          </View>
        </View>
      </View>
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
        <Face icon="neutral" title="Okey" color="#a5008c" full />
        <Face icon="frowning" title="Bad" color="#827791" />
        <Face icon="expressionless" title="Awful" />
      </View>
      <View>
        <CardHome 
          title='Your Next Appointment' 
          info={{
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAxCiVB3o9i7-04KXexFIDpbxEhUkmxQ14KQ&usqp=CAU',
            name: 'Dr R Bruce Banner', 
            time: 'Sunday, July 15th at 8:45 PM', 
            address1: '87 Waiyaki Way',
            address2: 'Westlands, Nairobi 00800'
          }}
        />
        <CardHome 
        title='Specialist in your area' 
        info={{
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiB83zs24_peVmkkZ-nKLrAzO5_ZbjJR_amg&usqp=CAU', 
            name: 'Dr Hellen Cho', 
            time: 'Avengers',
            address1: 'Dermatologists',
            address2: 'Westlands, NBO | 15min',
            isLike: true,
            rating: 4,
            tag: 'Wellness',
        }} />
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
  cardContainer: {
    padding: 15,
  },
  cardHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardMore: {
    fontWeight: 'bold',
    color: '#7b6c95',
  },
  cardBody: {
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardAvatar: {
    height: 60,
    width: 60,
    backgroundColor: 'gray',
    borderRadius: 60,
  },
  cardLeftSide: {
    paddingHorizontal: 10,
    flex: 1,
  },
  cardName: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardTime: {
    color: '#222',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  cardAddress: {
    color: 'gray',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
  iconMore: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  iconLike: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cardBodyTop: {
    flexDirection: 'row',
  },
  cardGroupIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBodyBottom: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBottomText: {
    fontSize: 14,
    marginTop: 5,
  },
  margin: {
    height: 1,
    backgroundColor: '#f0f1f2',
    width: '100%',
    marginVertical: 10,
  },
  tag: {
      color: '#b066a4',
  },
  rating: {
      flexDirection: 'row',
      marginTop: 5,
  },
});
