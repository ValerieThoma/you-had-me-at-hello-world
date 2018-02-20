import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './FirstScreen';
import AnotherScreen from './AnotherScreen';
import {
  StackNavigator,
} from 'react-navigation';

export default class App extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You had me at Hello World</Text>
        <Button 
          title="GO TO NEW PAGE"
          onPress={()=> navigate('Profile', {name: 'Jane'})}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
