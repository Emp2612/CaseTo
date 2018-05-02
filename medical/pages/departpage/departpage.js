// pages/departpage/departpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title1: 123,
    title2: 456,
    catePidName: [],
    cateTitle: [],
    cateTitleItem: [],
    index: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://cs.kmmyxb.cn/api/hosp.php?action=hosp_attr&hosp_id=1',
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res)
        that.setData({
          catePidName: res.data,
          // cateTitle: res.data[0].sub[0].cate_title
        });
        // console.log(res.data)
        // console.log(res.data[0])
        // console.log("cateTitle", res.data[0].sub[0].cate_title)
        var cateTitle = []
        for (var i = 0; i < res.data.length; i++) {
          cateTitle.push(res.data[i].sub)
        }
        that.setData({
          cateTitleItem: cateTitle,
        })
        console.log("cateTitle", that.data.cateTitle)
      }
    })
  },
  catepidSelected: function (event) {
    // if (event.currentTarget.id == 0) {
    //   console.log(this.data.cateTitleItem),
    //     this.setData({
    //       cateTitle: this.data.cateTitleItem[0],
    //     });
    // } else if (event.currentTarget.id == 1) {
    //   console.log('cateTitleItem')

    // }
    this.setData({
      cateTitle: this.data.cateTitleItem[event.currentTarget.id],
    });
    console.log("cateTitle", this.data.cateTitle)
  },
  cateSelected: function (event) {
    console.log(event)
    console.log(event.currentTarget.dataset.a)
    wx.navigateTo({
      url: '../physiclist/physiclist?a=' + event.currentTarget.dataset.a,
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