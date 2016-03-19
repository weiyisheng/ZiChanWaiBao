import React from 'react-native'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { WidthScale } from '../constants/StyleConstants'

class CountItem extends React.Component {

  clicked() {
    let { countItemChoosed } = this.props
    if(countItemChoosed) {
      countItemChoosed()
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.clicked}>
        <View style={[styles.box]}>
          <Text style={[styles.itemText]}>3211 **** **** **** 211</Text>
        </View>
      <TouchableOpacity/>
    )
  }
}

module.exports = CountItem

const styles = StyleSheet.create({
  box: {
    paddingTop: 10 * WidthScale,
    paddingBottom: 10 * WidthScale
  },
  itemText: {
    fontSize: 16,
  },

})
