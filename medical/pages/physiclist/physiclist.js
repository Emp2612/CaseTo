// pages/physiclist/physiclist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navSectionItems: [],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(options)
    wx.request({
      url: 'https://cs.kmmyxb.cn/api/doctor.php?action=doctor&hosp_id=1&cate_id=6',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          navSectionItems: res.data
        })
        console.log("navSectionItems", that.data.navSectionItems)
      }
    })
  },
  // 跳转至详情页
  navigateDetail: function (e) {
    wx.navigateTo({
      url: '../detail/detail?artype=' + e.currentTarget.dataset.artype
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