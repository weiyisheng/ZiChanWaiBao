
import React from 'react-native'

const { View, StyleSheet, Text, ScrollView, Platform,
  TextInput, TouchableOpacity } = React
import Modal from 'react-native-modalbox'
import NavigationBar from '../components/common/navBar/NavBar'

import CountBox from './CountBox'

//constants
import { NavBodyHeight, WidthScale, Red, Yellow,
  ContainerBackgroundColor, Flex1, FlexRow, TextColorBlack } from '../constants/StyleConstants'
import { COUNT_TYPE_DEBIT_CARD, COUNT_TYPE_PASS_BOOK,
  COUNT_TYPE_DEPOSIT_RECEIPT } from '../constants/NormalConstants'

const HasCountScene = React.createClass({

  countChoosed() {
    this.refs.editModal.open()
    this.refs.numInput.focus()
  },

  closeModal(){
    this.refs.numInput.blur()
    this.refs.editModal.close()
  },

  render() {
    let statusBar = {hidden: false}
    if(Platform.OS === 'android') {
      statusBar.hidden = true
    }
    return (
      <View style={[Flex1, ContainerBackgroundColor]}>
        <NavigationBar
        title={{title: "未关联资产账户"}}
        statusBar={statusBar}/>
        <ScrollView
          style={[NavBodyHeight, ContainerBackgroundColor]}>
          <View style={[styles.infoBox]}>
            <Text style={[styles.infoText]}>系统检测到以下行内资产未关联。请选择您要关联的资产账户，
              输入完整的卡号和取款密码，即可关联成功。</Text>
          </View>

          <CountBox type={COUNT_TYPE_DEBIT_CARD} countChoosed={this.countChoosed}/>
          <CountBox type={COUNT_TYPE_PASS_BOOK} countChoosed={this.countChoosed} />
          <CountBox type={COUNT_TYPE_DEPOSIT_RECEIPT} countChoosed={this.countChoosed} />
          <View style={{width: 1, height: 30}}/>
        </ScrollView>

        <Modal style={[styles.modal, styles.modal2]}
          backdrop={true}
          backdropPressToClose={false}
          position={"bottom"}
          ref={"editModal"}
          backdropOpacity={.5}
          animationDuration={200}>
          <View style={[FlexRow, styles.modalTitleBox]}>
            <TouchableOpacity onPress={() => this.refs.editModal.close()}>
              <Text style={[TextColorBlack, styles.modalTitleBtnText,
                {paddingLeft: 10 * WidthScale}]}>取消</Text>
            </TouchableOpacity>

            <Text style={[styles.modalTitleText]}>输入完整的卡号</Text>

            <TouchableOpacity onPress={() => this.closeModal()}>
              <Text style={[TextColorBlack, styles.modalTitleBtnText,
                {paddingRight: 10 * WidthScale}]}>下一步</Text>
            </TouchableOpacity>
          </View>

          <TextInput ref="numInput"
            style={{width:200, height: 80, backgroundColor: 'red'}}
            keyboardType={"numeric"}/>
        </Modal>
      </View>
    )
  }
})

module.exports = HasCountScene

const styles = StyleSheet.create({
  body: {

  },
  infoBox: {
    backgroundColor: Yellow,
    marginTop: 25 * WidthScale,
    marginLeft: 17 * WidthScale,
    marginRight: 17 * WidthScale,
    padding: 15 * WidthScale
  },
  infoText: {
    color: Red,
    fontSize: 17 * WidthScale,
  },

  modal: {
  },

  modal2: {
    height: 300
  },
  modalTitleBox: {
    justifyContent: "space-between",
    paddingTop: 12 * WidthScale
  },
  modalTitleBtnText: {
    fontSize: 16,
    opacity: .6
  },
  modalTitleText: {
    fontSize: 17
  }
})
