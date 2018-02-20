import React from 'react';
import {
  Stylesheet,
  Text,
  View,
  Button
} from 'react-native';
import { appStyles } from './styles';
const styles = StyleSheet.create(appStyles);

export default class FirstScreen extends React.Component{



  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, Builders!</Text>
      </View>  
    )
  }
}