// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityArray: [],
    hospArray: [],
    consuArray: [],
    cityIndex: 0,
    hospIndex: 0,
    consuIndex: 0,
    // citydata: [],
    // customItem: '请选择城市'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://cs.kmmyxb.cn/api/hosp.php?action=citycode',
      data: "",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          cityArray: res.data,
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 城市选择；
  bindCityPickerChange: function (e) {
    console.log('期望就诊城市', e.detail.value);
    this.setData({
      cityIndex: e.detail.value
    });
    this.send_hosp(this.data.cityArray[this.data.cityIndex].city_id);
    console.log('cityIndex', this.data.cityIndex, this.data.cityArray[this.data.cityIndex].city_id)
  },
  send_hosp: function (city_id) {
    var that = this;
    wx.request({
      url: 'https://cs.kmmyxb.cn/api/hosp.php?action=hosp&city_id=' + city_id + '&grade_id=1',
      data: "",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          hospArray: res.data,
        });
      }
    })
  },
  // 就诊医院选择；
  bindHospPickerChange: function (e) {
    console.log('期望就诊医院', e.detail.value)
    this.setData({
      hospIndex: e.detail.value
    });
    this.send_consu(this.data.hospArray[this.data.hospIndex].hosp_id);
    console.log('hospIndex', this.data.hospIndex, this.data.hospArray[this.data.hospIndex].hosp_id)
  },
  send_consu: function (cate_id) {
    var that = this;
    wx.request({
      url: 'https://cs.kmmyxb.cn/api/hosp.php?action=hosp_attr&hosp_id=1',
      data: "",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          consuArray: res.data,
        });
        // console.log(consuArray)
      }
    })
  },
  // 科室选择
  bindConsuPickerChange: function (e) {
    console.log('期望就诊科室', e.detail.value)
    this.setData({
      consuIndex: e.detail.value
    });
    this.submitItems(this.data.consuArray[this.data.consuIndex].cate_pid);
    console.log('consuIndex', this.data.consuArray, this.data.consuArray[this.data.consuIndex].cate_pid)
  },
  submitItems:function(e){

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