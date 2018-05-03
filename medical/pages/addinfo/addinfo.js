// pages/addinfo/addinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    sex: "男",
    documents: "身份证",
    age: "",
    phone: "",
    IDcard: "",
    isSubmit: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: 'https://cs.kmmyxb.cn/api/weixin/userinfo.php?action=addRelation',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let { name, sex, documents, age, phone, IDcard } = e.detail.value;
    if (!name || !age || !phone || !IDcard) {
      this.setData({
        warn: "*温馨提示：存在信息为空！",
        isSubmit: true
      })
      return;
      this.setData({
        warn: "",
        isSubmit: true,
        name,
        sex,
        documents,
        age,
        phone,
        IDcard,
      })
    }
    wx.request({
      url: 'https://cs.kmmyxb.cn/api/weixin/userinfo.php?action=addRelation',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: { name: this.data.name, sex: this.data.sex, documents: this.data.documents, age: this.data.age, phone: this.data.phone, IDcard: this.data.phone },
      success: function (data) {
        console.log(data.status)
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})