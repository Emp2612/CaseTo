// pages/detail/detail.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    index: 0,
    clickbtnId: 0,//判断颜色点击ID
    pageBackgroundColor: '#fff',
    showView: true,
    bordercolor: '#000',
    doctorInfo: [],
    bookBtn: [],
    dataTmie: [],
    date: [],
    spanData: [],
    orderNum: '',
    spanDate: '',
    money: '',
    recomDoct: [],
    patient: "",
    phone: "",
    IDcard: "",
    // bookBtn: util.formatTime(new Date())
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 调用函数时，传入new Date()参数，返回值是日期和时间  
    var bookBtn = util.formatTime(new Date());
    // showView: (options.showView == "true" ? true : false)
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    wx.request({
      url: 'https://cs.kmmyxb.cn/api/doctor.php?action=detail&doctor_id=1',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          doctorInfo: [res.data]
        });
        console.log(that.data)
        var bookBtn = [];
        var spanData = [];
        var coPay = [];
        var recomDoct = [];
        console.log(res.data);
        console.log()
        for (var j = 0; j < res.data.recommend.length; j++) {
          recomDoct.push(res.data.recommend[j])
        }
        for (var i = 0; i < res.data.visik.length; i++) {
          bookBtn.push(res.data.visik[i].start_time)
          spanData.push(res.data.visik[i].order_num)
          coPay.push(res.data.visik[i].money)
        }
        that.setData({
          bookBtn: bookBtn,
          spanData: spanData,
          coPay: coPay,
          recomDoct: recomDoct
        })
        console.log("recomDoct", that.data.recomDoct)
        console.log("bookBtn", that.data.bookBtn)
        console.log("spanData", that.data.spanData)
        var time = new Date();
        console.log("dataTmie", that.data.dataTmie)
        console.log(bookBtn.length);
        let date = []
        for (let i = 0; i < bookBtn.length; i++) {
          time.setTime(bookBtn[i] * 1000)
          date.push(util.formatTime(time))
          // 
          console.log(date, 'Y/M/D h:m:s', i)
          // console.log(date[0].year+"n" + date[0].month+"m")
        }
        that.setData({
          date: date
        })
      },
    })
  },
  timeSelected: function (event) {
    this.setData({
      clickbtnId: event.currentTarget.id, // 设置背景颜色数据
      showView: (!this.data.showView),
      spanDate: this.data.date[event.currentTarget.id].date,
      orderNum: this.data.spanData[event.currentTarget.id],
      money: this.data.coPay[event.currentTarget.id],
    });
    console.log("date", this.data.date)
    console.log("clickbtnId", event.currentTarget.id)
  },
  orderSubmit: function () {
    this.setData({
      showView: (!this.data.showView)
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let { patient, phone, IDcard } = e.detail.value;
    if (!patient || !phone || !IDcard) {
      this.setData({
        warn: "*温馨提示：存在信息为空！",
        isSubmit: true
      })
      return;
      this.setData({
        warn: "",
        isSubmit: true,
        patient,
        phone,
        IDcard,
      })
      wx.request({
        url: 'https://cs.kmmyxb.cn/api/weixin/userinfo.php?action=selectRelation',
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: { patient: this.data.patient, phone: this.data.phone, IDcard: this.data.IDcard },
        success: function (data) {
          console.log(data)
          console.log(data.status)
        }
      })
    }
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  navigateDetail: function () {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  show: function () {

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