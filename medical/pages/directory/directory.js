// pages/directory/directory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityName: [],
    cityId: '',
    menuType: 0,
    status: 1,
    isVisible: false,
    animationData: {},
    animationAddressMenu: {},
    addressMenuIsShow: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化动画变量
    var animation = wx.createAnimation({
      duration: 500,
      transformOrigin: "50% 50%",
      timingFunction: 'ease',
    })
    this.animation = animation;
    var that = this
    wx.request({
      url: 'https://cs.kmmyxb.cn/api/hosp.php?action=citycode',
      data: '',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        // console.log(res.data[0].city_name)
        // console.log(res.data[0].city_id)
        // that.setData({
        //   cityId: res.data[0].city_id,
          // cityName: res.data
        // })
     //  var cityName = [];
        // for (var i = 0; i < res.data.length; i++) {
        //   cityName.push(res.data[i].city_name)
        // }
        that.setData({
          cityName: res.data,
        })
        console.log('cityName', that.data.cityName)
      }
    })
   
  },
  showMenuTap: function (e) {
    console.log('selectState')
    //获取点击菜单的类型 1点击区域 2点击等级 
    var menuType = e.currentTarget.dataset.type
    // 如果当前已经显示，再次点击时隐藏
    if (this.data.isVisible == true) {
      this.startAnimation(false, -400)
      return
    }
    this.setData({
      menuType: menuType,
    })
    console.log(e.currentTarget.dataset)
    this.startAnimation(true, 0)
  },
  hideMenuTap: function (e) {
    this.startAnimation(false, -400)
  },
  // 执行动画
  startAnimation: function (isShow, offset) {
    var that = this
    var offsetTem
    if (offset == 0) {
      offsetTem = offset
    } else {
      offsetTem = offset + 'rpx'
    }
    this.animation.translateY(offset).step()
    this.setData({
      animationData: this.animation.export(),
      isVisible: isShow
    })
    console.log(that.data)
  },
  // 选择状态按钮
  selectState: function (e) {
    console.log('selectState1')
    this.startAnimation(false, -400)
    var status = e.currentTarget.dataset.status
    this.setData({
      status: status
    })
    console.log(that.data)

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