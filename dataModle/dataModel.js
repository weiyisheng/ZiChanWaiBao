import NetUitl from '../utils/NetUtil'

module.exports = {
  BeginRequestUserInfoMesage : function(arg1 , callback) {
    MONEY_REQUEST_BASEMESSAGE_URL = 'http://client.map.baidu.com/opn/pvn/recommend'

    NetUitl.get(MONEY_REQUEST_BASEMESSAGE_URL , (messageID , JsonData) => {
      console.log(messageID, JsonData);
      let result = {}
      if (messageID === 1003) {
        let errno = JsonData.errno;
        if (errno === 0) {
          //服务返回成功
          let dataMsg = JsonData.data;
          result = {
            //有卡片信息
           errorCode  : 0,
           hasCardMsg : true,
           message   : dataMsg,
         }
        } else {
          result = {
            //没有卡片信息
            errorCode  : 0,
            hasCardMsg : false,
          }
        }
      } else {
        //网络请求失败
           result = {
             errorCode : -1,
             message   : JsonData,
          }
      }
      callback(result);
    })
 }
}
