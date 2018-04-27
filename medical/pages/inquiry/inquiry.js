// pages/inquiry/inquiry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityCode: [],
    hospGrade: [],
    commanders: [],
    qyopen: false,
    qyshow: true,
    nzopen: false,
    pxopen: false,
    nzshow: true,
    pxshow: true,
    isfull: false,
    // citycode: '区域',
    // hosp_grade: '等级',
    shownavindex: '',
    cityData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://cs.kmmyxb.cn/api/hosp.php?action=citycode',
      data: "",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log('res.data',res.data)
        console.log(res.data[0].city_name)
        that.setData({
          cityCode: res.data,
          // city_name: res.data[0].city_name
        });
        var cityData = []; 
        for (var i = 0; i < res.data.length;i++){
          cityData.push(res.data[i].city_name)
        }
        that.setData({
          cityData: cityData,
          // city_name: res.data[0].city_name
        });
        
        console.log('citycode', that.data.cityData)
      }
    })
    wx.request({
      url: 'https://cs.kmmyxb.cn/api/hosp.php?action=hosp_grade',
      data: "",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        console.log(res.data[0].grade)
        that.setData({
          hospGrade: res.data,
        })
      }
    })
  },
  arealist: function (e) {
    if (this.data.pxopen) {
      this.setData({
        nzopen: false,
        pxopen: false,
        qyopen: false,
        nzshow: true,
        pxshow: false,
        qyshow: true,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        nzopen: false,
        pxopen: true,
        qyopen: false,
        nzshow: true,
        pxshow: false,
        qyshow: true,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav,
        // citycode: this.data.cityCode
      })
    }
    // console.log(this.data.citycode)

  },
  gradelist: function (e) {
    if (this.data.pxopen) {
      this.setData({
        nzopen: false,
        pxopen: false,
        qyopen: false,
        nzshow: true,
        pxshow: false,
        qyshow: true,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        nzopen: false,
        pxopen: true,
        qyopen: false,
        nzshow: true,
        pxshow: false,
        qyshow: true,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }

  },
  hidebg: function (e) {

    this.setData({
      qyopen: false,
      nzopen: false,
      pxopen: false,
      nzshow: true,
      pxshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0
    })
  },
  selectmdlitem: function (e) {
    var hospGrade = e.target.dataset.hosp_grade
    this.setData({ hospGrade: hosp_grade })
    Console.log("hospGrade", e.target.dataset.hosp_grade)
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