import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import { Button, TextInput } from 'react-native-paper';
import { useObservable, useObserver } from 'mobx-react-lite';

export default function Todo() {

    const [value, setValue] = useState('');

    const todos = useObservable(new Map());

    return useObserver(() => (
        <View>
            <View style={styles.controls}>
                <TextInput value={value} onChangeText={text => setValue(text)} label='Todo' />
                <Button style={styles.button} icon="add" mode="contained" onPress={() => {todos.set(value, false); setValue('')}}>Add</Button>
            </View>
            <View style={styles.list}>
                {Array.from(todos).map(([todo, done]) => (
                    <View key={todo} style={styles.todo}>
                        <Text onPress={() => todos.set(todo, !todos.get(todo))}>{todo}</Text>
                        <Text>{done ? "(Done)" : "(Not Done)"}</Text>
                    </View>
                ))}
            </View>
        </View>
    ));
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10
    },
    controls: {

    },
    list: {
        marginTop: 10
    },
    todo: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5
    }
});
