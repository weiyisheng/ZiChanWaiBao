const React = require('react-native')
const { Dimensions, Platform } = React

let{ width, height } = Dimensions.get('window')
let widthScale = width/375
let heightScale = height/667

module.exports = {
  WindowWidth: width,
  WindowHeight: height,
  WidthScale: widthScale,
  HeightScale: heightScale,
  Red: '#b33e4f',
  Yellow: '#fdf8e2',
  ContainerBackgroundColor: {
    backgroundColor: '#ffffff'
  },
  loadContainer: {

  },
  BorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee'
  },
  BorderTop: {
    borderTopWidth: 1,
    borderTopColor: '#eeeeee'
  },
  BorderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: '#eeeeee'
  },
  BorderRight: {
    borderRightWidth: 1,
    borderRightColor: '#eeeeee'
  },
  TextColorBlack: {
    opacity: 0.9,
    color: '#262626'
  },
  FlexRow: {
    flexDirection: 'row'
  },
  JustifyContentCenter: {
    justifyContent: 'center'
  },
  AlignItemsCenter: {
    alignItems: 'center'
  },
  Flex1: {
    flex: 1
  },
  NavBodyHeight: {
    height: Platform === 'ios' ? (height - 64) : (height - 44),
  },
  Absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
}
