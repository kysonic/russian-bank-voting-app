import React, {useState, useEffect} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, ScrollView, Text, AsyncStorage} from 'react-native';
import { Header } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/Colors';
import AppHeader from '../components/AppHeader';
import Onboarding from '../components/Onboarding';
import Link from '../components/Link';
import PhoneForm  from '../components/PhoneForm';
import {navigateWithoutHistory} from '../libs/navigation';

const DELTA = 28;
const PRIVACY_POLICY_LINK = 'https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5';

export default function AuthScreen(props) {
  const [phone, setPhone] = useState('');
  const [sms, setSms] = useState('');
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (global.token) {
      navigateWithoutHistory(props.navigation, 'Home');
    }
    return () => {};
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset = {Header.HEIGHT + DELTA}>
      <ScrollView contentContainerStyle={styles.scroller}>
        <Onboarding />
        <View style={[{flex: 1}, focus ? {position: 'absolute', bottom: -70 , width: '100%'} : {}]}>
          <LinearGradient style={styles.form} colors={focus ? ['#0088bb', '#00bbee'] : ['#fff', '#fff']} >
            <PhoneForm
                phone={phone}
                focus={focus}
                sms={sms}
                setPhone={setPhone}
                setFocus={setFocus}
                setSms={setSms}
                navigation={props.navigation}
            />
          </LinearGradient>
          <View style={styles.privacyPolicy}>
            <Text style={styles.privacyPolicyText} >Используя приложение, вы принимаете условия</Text>
            <Link style={styles.privacyPolicyLink} href={PRIVACY_POLICY_LINK}>пользовательского соглашения</Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

AuthScreen.navigationOptions = {
  header: AppHeader,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  scroller: {
    flexGrow: 1
  },
  privacyPolicy: {
    flex: 1,
    alignItems:'center',
    justifyContent:'flex-end',
    alignSelf:'stretch'
  },
  privacyPolicyText: {
    textAlign: "center",
    fontFamily: "Arial",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0,
    color: Colors.text
  },
  privacyPolicyLink: {
    textAlign: "center",
    fontFamily: "Arial",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0,
    marginTop: 5,
    marginBottom: 27
  }
});
