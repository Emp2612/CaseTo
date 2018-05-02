// pages/homepage/homepage.js
// var app = getApp()
// var fileData = require('../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // banner 初始化
    banner_url: ['../../images/2.jpg', '../../images/1.jpg', '../../images/3.jpg',],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    // nav 初始化
    navTopItems: [
      {
        id: 1,
        icon: "../../images/hospital.png",
        title: "医院查询"
      },
      {
        id: 2,
        icon: "../../images/nurse.png",
        title: "快捷预约"
      },
    ],
    navSectionItems: [],
    curNavId: 1,
    // curIndex: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // that.setData({
    //   list: that.data.navSectionItems
    // })
    wx.request({
      url: 'https://cs.kmmyxb.cn/api', //仅为示例，并非真实的接口地址
      data: '',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: res => {
        this.setData({
          navSectionItems: res.data
        });
        console.log(this.data.navSectionItems)
      }
    })
  },
  //导航icon跳转
  navTopItems: function (e) {
    var data = e.currentTarget.dataset
    console.log(data)
    // console.log(this.data.navTopItems)
    if (data.id == 1) {
      wx.navigateTo({
        url: '../inquiry/inquiry?artype=' + e.currentTarget.dataset.artype
      })
    }
    else {
      wx.navigateTo({
        url: '../order/order?artype=' + e.currentTarget.dataset.artype
      })
    }
  },
  navigateDetail: function (e) {
    wx.navigateTo({
      url: '../division/division?artype=' + e.currentTarget.dataset.artype
    })
  },
  /** djdk */
  navSectionItemFunc: e => {
    
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