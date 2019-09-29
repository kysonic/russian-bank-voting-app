import React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import AppHeader from "../components/AppHeader";
import {Feather} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import {LinearGradient} from "expo-linear-gradient";
import { Avatar } from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient style={styles.userInfo} colors={['#0088bb', '#00bbee']} >
        <Avatar.Icon size={50} icon={() => (<Feather name="user" size={36} color="#0088bb" />)} style={styles.avatar} />
        <View style={styles.info}>
           <Text style={styles.account}>User #1897773884</Text>
           <Text style={styles.phone}>+7 (938) 124-14-79</Text>
        </View>
      </LinearGradient>
      <View style={styles.stats}>
        <ProfileStat icon="check-circle" text="Количество пройденных опросов" value={24} />
        <ProfileStat icon="gift" text="Количество заработанных баллов" value={24} />
        <ProfileStat icon="users" text="Приглашенные друзья в соцсетях" value={5} />
      </View>
    </ScrollView>
  );
}

export function ProfileStat({icon, text, value}) {
  return (
      <View style={statStyles.container}>
        <Feather name={icon} size={20} color={Colors.firmBlue} />
        <Text style={statStyles.text}>{text}</Text>
        <Text style={statStyles.value}>{value}</Text>
      </View>
  );
}

const statStyles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.gray,
    padding: 20,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    flexWrap: 'wrap',
    width: 170,
    height: 40,
    fontFamily: "Arial",
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.26,
    color: Colors.text
  },
  value: {
    width: 57,
    height: 25,
    fontFamily: "Arial",
    fontSize: 21,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0.37,
    textAlign: "right",
    color: Colors.firmBlue
  }
});

ProfileScreen.navigationOptions = ({navigation}) => (
    {
      header: () => (
          <AppHeader title='Профиль' navigation={navigation} back={true}>
            <Feather name="log-in" size={24} color={Colors.primary} onPress={() => navigation.navigate('Home')} />
          </AppHeader>
      )
    }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  userInfo: {
    width: '100%',
    height: 96,
    padding: 23,
    flexDirection: 'row'
  },
  avatar: {
    backgroundColor: Colors.white
  },
  info: {
    marginLeft: 20
  },
  account: {
    fontFamily: "Arial",
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: Colors.white
  },
  phone: {
    fontFamily: "Arial",
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0.31,
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: 4
  },
  stats: {
    padding: 5
  }
});
