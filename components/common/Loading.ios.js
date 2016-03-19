
import React from 'react-native'

const {View, ActivityIndicatorIOS } = React

import CommonStyles from '../../constants/CommonStyles'

class Loading extends React.Component {
  render() {
    const {animating, size, color, style} = this.props
    return (
      <View style={[CommonStyles.loadingContainer, style || {}]}>
        <ActivityIndicatorIOS
            animating={(animating === undefined ? true : animating)}
            size={(size || "large")}
            color={(color || "gray")} />
      </View>
    )
  }
}

module.exports = Loading
