import React from 'react-native'
import { View, Text, StyleSheet, Platform } from 'react-native'

//components
import Loading from './components/common/Loading'
import NoCountScene from './components/NoCountScene'
import HasCountScene from './components/HasCountScene'
import NavigationBar from './components/common/navBar/NavBar'

//constants
import { Flex1, ContainerBackgroundColor } from './constants/StyleConstants'
import { SCENE_TAG_NO_COUNT, SCENE_TAG_HAS_COUNT } from './constants/NormalConstants'


const MainScene = React.createClass({

  getInitialState() {
    return {
      fetchLoading: false,
      sceneTag: SCENE_TAG_NO_COUNT
    }
  },

  render() {
    let { fetchLoading, sceneTag } = this.state

    return (
      <View style={[Flex1]}>
        {
          (() => {
            if(fetchLoading) {
              return (
                <Loading styles={ContainerBackgroundColor}/>
              )
            } else {

              if(sceneTag === SCENE_TAG_NO_COUNT) {
                return (
                  <NoCountScene />
                )
              } else if(sceneTag === SCENE_TAG_HAS_COUNT){
                return (
                  <HasCountScene />
                )
              } else {
                return (
                  <View />
                )
              }
            }
          })()
        }
      </View>
    )
  }
})


module.exports = MainScene

const styles = StyleSheet.create({

})
