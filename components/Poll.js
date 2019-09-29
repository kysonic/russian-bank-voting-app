import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../constants/Colors';
import { TextInput, RadioButton } from "react-native-paper";
import theme from '../constants/TextInputTheme';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  vote: {
    width: 130,
    marginTop: 30,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  rate: {

  },
  Extended: {

  }
});

const Vote = () => {
  return (
    <View style={styles.vote}>
      <Feather name="thumbs-up" size={36} color={colors.red}/>
      <Feather name="thumbs-down" size={36} color={colors.red}/>
    </View>
  )
};

const Rate = (props) => {
  const DEFAULT = 5;
  return (
    <View style={{ justifyContent: 'center', flexDirection: 'row', paddingVertical: 10 }}>
      {Array.apply(null, { length: DEFAULT }).map((_, index) => (
        <Feather
          key={index}
          style={{
            marginRight: 12,
          }}
          name="star"
          color={colors.red}
          size={36}
        />
      ))}
    </View>
  )
};

const Extended = (props) => {
  const [text, setState] = React.useState('');
  return (
    <View style={{ width: width - 40 }}>
      <TextInput
        type="flat"
        value={text}
        theme={theme}
        onChangeText={text => setState(text)}
      />
    </View>
  )
};

const Check = (props) => {
  return (
    <Text>hjhj</Text>
  )
};

const Radio = (props) => {
  const [checked, setChecked] = React.useState(null);
  const handleInput = (value) => (e) => {
    setChecked(value);
  };
  const { opts } = props;
  return (
    <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      {
        opts.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              width: width - 40,
              alignContent: 'center',
              alignItems:'center'
            }}>
            <RadioButton
              value={item.val}
              status={checked === item.val ? 'checked' : 'unchecked'}
              onPress={handleInput(item.val)}
            />
            <Text>{item.label}</Text>
          </View>
        ))
      }
    </View>
  )
};

const PollForm = (props) => {
  let component = null;
  switch (props.type) {
    case 'vote':
      component = <Vote />;
      break;
    case 'rate':
      component = <Rate />;
      break;
    case 'extended':
      component = <Extended />;
      break;
    case 'check':
      component = <Check />;
      break;
    case 'radio':
      component = <Radio {...props}/>;
      break;
  }

  return component;
};

export default PollForm;
