
import React from 'react-native'

const {View, ProgressBarAndroid } = React

import CommonStyles from '../../constants/CommonStyles'

class Loading extends React.Component {
  render() {
    const {animating, size, color, style} = this.props
    let styleAttr = size ? ((size === 'small') ? 'Inverse' : 'Inverse') : 'Inverse'

    return (
      <View style={[CommonStyles.loadingContainer, style || {}]}>
        <ProgressBarAndroid
          styleAttr={styleAttr}
          color={(color || "#d8d8d8")}/>
      </View>
    )
  }
}

module.exports = Loading
