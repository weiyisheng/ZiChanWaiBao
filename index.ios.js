/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainScene from './MainScene'

class Test extends Component {

  render() {
    return (
      <MainScene />
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('Test', () => Test);
