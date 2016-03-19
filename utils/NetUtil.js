'use strict';
import React, {
  Component,
} from 'react-native'

class NetUitl extends React.Component {

  //post请求
  static  postFrom(url, data, callback) {
      var fetchOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:'data='+data+''
      };

      fetch(url, fetchOptions)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      }).done();
    }
    //post json格式
    static postJson (url, data, callback) {
        var fetchOptions = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            //json形式
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };

      fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseText) => {
          callback(JSON.parse(responseText));
        }).done();
      }

        //get请求
        //get请求
    static  get(url, callback) {
      fetch(url)
        .then((response) => response.text())
        .then((responseText) => {
          callback( 1003 , JSON.parse(responseText));
        })
        .catch((error) => {
        callback( 1004 , "error");
        }).done();
    }
}

module.exports = NetUitl
