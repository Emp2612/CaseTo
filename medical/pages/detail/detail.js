// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    pageBackgroundColor: '#fff',
    bordercolor: '#000',
    doctorInfo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://cs.kmmyxb.cn/api/doctor.php?action=detail&doctor_id=1',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res){
        console.log(res.data)
        that.setData({
          doctorInfo:res.data
        })
      }
    })
  },
  show: function () {
    var bgColor = this.data.pageBackgroundColor == '#3cf' ? '#fff' : '#3cf';
    var bdColor = this.data.bordercolor == '#3cf' ? '#fff' : '#3cf';
    // 设置背景颜色数据
    this.setData({
      flag: false,
      pageBackgroundColor: bgColor,
      bordercolor: bdColor
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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