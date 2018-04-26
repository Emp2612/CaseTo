//app.js
App({
  onLaunch: function () {
    //1、调用微信登录接口，获取code
    wx.login({
      success: function (r) {
        var code = r.code;//登录凭证
        // console.log(code)
        if (code) {
          //2、调用获取用户信息接口
          wx.getUserInfo({
            success: function (res) {
              // console.log(res)
              // console.log({ userInfo: res.userInfo, code: code, })
              //3.请求自己的服务器，解密用户信息 获取unionId等加密信息
              wx.request({
                url: 'https://cs.kmmyxb.cn/api/weixin/userinfo.php',//服务接口地址
                method: 'post',
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                data: { avatarUrl: res.userInfo.avatarUrl, nickName: res.userInfo.nickName, code: code },
                // data: "res=" + code + userInfo,
                success: function (data) {
                }
              })
            }
          })
        }
      }
    })
  }
})