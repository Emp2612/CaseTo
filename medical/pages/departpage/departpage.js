// pages/departpage/departpage.js
/**2018-05-03
  * @case..
  *医院两级联动
  * 
  */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    catePidName: [],//科室主类
    cateTitle: [],//科室子类
    cateTitleItem: [],//科室主类项
    index: 0,//判断点击ID
    pageBackgroundColor: '#fff',
    clickId: 0,//判断颜色点击ID
    rightclickId: 0,//判断颜色点击ID
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://cs.kmmyxb.cn/api/hosp.php?action=hosp_attr&hosp_id=1',//科室接口请求
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res)
        that.setData({
          catePidName: res.data,//参数赋值
          // cateTitle: res.data[0].sub[0].cate_title
        });
        // console.log(res.data)
        // console.log(res.data[0])
        // console.log("cateTitle", res.data[0].sub[0].cate_title)
        // 右侧科室细类封装
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
  //左侧点击事件
  catepidSelected: function (event) {
    this.setData({
      clickId: event.target.id, // 设置背景颜色数据
      cateTitle: this.data.cateTitleItem[event.currentTarget.id],
    });
    console.log("cateTitle", this.data.cateTitle)
  },
  //左侧点击事件
  cateSelected: function (event) {
    console.log(event)
    console.log(event.target.dataset.a)
    this.setData({
      rightclickId: event.target.id,// 设置背景颜色数据
    })
    //带参数跳转相应科室医生页面
    wx.navigateTo({
      url: '../physiclist/physiclist?a=' + event.target.dataset.a,
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