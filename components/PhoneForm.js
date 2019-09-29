import React, {createRef, useState, useEffect} from 'react';
import { View, StyleSheet, Text, TextInput as TextInputNative } from 'react-native';
import Colors from "../constants/Colors";
import Config from "../constants/Config";
import {DefaultTheme, TextInput, ActivityIndicator} from "react-native-paper";
import {TextInputMask} from "react-native-masked-text";
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import {navigateWithoutHistory} from '../libs/navigation';
import theme from '../constants/TextInputTheme';

const smsInputRef = createRef();

export default function PhoneForm ({focus, phone, sms, setPhone, setFocus, setSms, navigation}) {
    const [phoneFilled, setPhoneFilled] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        const loginRequest = async () => {
            setLoading(true);
            try {
                const response = await axios.post(`${Config.apiURL}/login`, {phone});
                if (response.data && response.data.status === 'pending') {
                    setPhoneFilled(true);
                } else {
                    setPhone('');
                }
                setLoading(false);
            } catch (err) {
                console.error(err);
                setPhone('');
                setLoading(false);
            }
        };

        if (phone.length === 18 && !phoneFilled) {
            loginRequest();
        }

        return () => {};
    }, [phone.length]);

    useEffect(() => {
        if (phoneFilled) {
            setTimeout(() => {
                smsInputRef.current && smsInputRef.current.focus && smsInputRef.current.focus();
            });
        }
        return () => {};
    }, [phoneFilled]);

    useEffect( () => {
        const verifyRequest = async () => {
            setLoading(true);
            try {
                const response = await axios.post(`${Config.apiURL}/verify`, {phone, code: sms});
                if (response.data && response.data.phone === phone) {
                    await AsyncStorage.setItem('token', response.data.token);
                    navigateWithoutHistory(navigation, 'Home');
                }
                setLoading(false);
            } catch (err) {
                console.error(err);
                setSms('');
                setLoading(false);
            }
        };

        if (sms.length === 4 && phoneFilled) {
            verifyRequest();
        }

        return () => {};
    }, [sms.length]);

    return (
        <View style={styles.form}>
            {loading && <ActivityIndicator animating={true} color={Colors.white} />}
            {!phoneFilled && !loading && (
                <View>
                    <Text style={[styles.label, focus ? {color: Colors.whiteGray} : {}]}>Введите номер телефона</Text>
                    <TextInput
                        type="flat"
                        value={phone}
                        placeholder="+7 (XXX) XXX XX XX"
                        onChangeText={text => setPhone(text)}
                        style={{backgroundColor: 'transparent'}}
                        underlineColor={focus ? Colors.white : Colors.grayDark}
                        selectionColor={Colors.white}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        theme={theme}
                        render={props =>
                            <TextInputMask
                                {...props}
                                type="custom"
                                style={[styles.maskedInput, focus ? {color: Colors.white} : {}]}
                                placehodler="+7 (XXX) XXX XX XX"
                                options={{
                                    mask: '+7 (999) 999-99-99'
                                }}
                            />
                        }
                        keyboardType="numeric"
                    />
                </View>
            )}
            {phoneFilled && !loading && (
                <View>
                    <Text style={[styles.enteredPhone]}>{phone}</Text>
                    <Text style={[styles.label, focus ? {color: Colors.whiteGray} : {}]}>Введите код из SMS</Text>
                    <TextInput
                        type="flat"
                        ref={smsInputRef}
                        value={sms}
                        onChangeText={text => setSms(text)}
                        style={{backgroundColor: 'transparent'}}
                        underlineColor={focus ? Colors.white : Colors.grayDark}
                        selectionColor={Colors.white}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        theme={theme}
                        keyboardType="numeric"
                        render={props => <TextInputNative  {...props} style={styles.smsInput}/>}
                    />
                </View>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24,
        paddingBottom: 35
    },
    maskedInput: {
        textAlign: 'center',
        fontSize: 17,
        padding: 9
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
    enteredPhone: {
        fontFamily: "Arial",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.17,
        textAlign: "center",
        color: Colors.white,
        paddingBottom: 10
    },
    smsInput: {
        fontFamily: "Arial",
        fontSize: 17,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.15,
        textAlign: "center",
        color: Colors.white,
        padding: 9
    }
});
