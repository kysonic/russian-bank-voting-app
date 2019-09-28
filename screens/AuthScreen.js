import React, {useState} from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Header } from 'react-navigation-stack';
import { TextInputMask } from 'react-native-masked-text'

import Colors from '../constants/Colors';
import AppHeader from '../components/AppHeader';
import Onboarding from '../components/Onboarding';
import Link from '../components/Link';

const DELTA = 50;
const PRIVACY_POLICY_LINK = 'https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5';

export default function AuthScreen(props) {
  const [phone, setPhone] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset = {Header.HEIGHT + DELTA}>
      <ScrollView contentContainerStyle={styles.scroller}>
        <Onboarding text="ОРУУУУУ" />
        <View style={{flex: 1}}>
          <View style={styles.form}>
            <Text style={styles.label}>Введите номер телефона</Text>
            <TextInput
                type="outlined"
                value={phone}
                label="+7 (XXX) XXX XX XX"
                onChangeText={text => setPhone(text)}
                style={styles.input}
                underlineColor={Colors.text}
                selectionColor={Colors.red}
                render={props =>
                    <TextInputMask
                        {...props}
                        type="custom"
                        placehodler="+7 (XXX) XXX XX XX"
                        options={{
                          mask: '+7 (999) 999-99-99'
                        }}
                    />
                }
                keyboardType="numeric"
            />
          </View>
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
  form: {
    flex: 1,
    marginTop: 24,
    padding: 16
  },
  input: {
    backgroundColor: Colors.background,
    textAlign: 'center',
    fontSize: 17
  },
  label: {
    width: "100%",
    height: 20,
    fontFamily: "Arial",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0.14,
    textAlign: "center",
    color: Colors.primary
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
