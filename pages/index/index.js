//index.js
//获取应用实例
const app = getApp()
const api = require('../../utils/api')
Page({
  data: {
    list: [],
    loading: true,
    upLoading: true,
    width: 0,
    height: 0,
    params: {
      page: 1,
      per_page: 12
    }
  },
  //事件处理函数
  pullUpLoad: function() {
    console.log(12321)
  },
  handleFav: function(event) {
    console.log(12312)
  },
  handleAnimated: function() {
    console.log('handleAnimated')
  },
  onShow: function() {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          width: res.windowWidth,
          height: res.windowHeight
        })
      }
    })
  },
  onLoad: function () {
    app.fetchApi(api.serialize('shots', this.data.params), (err, res) => {
      console.log(res)
      this.setData({
        list: res,
        loading: false,
        upLoading: false
      })
    }) 
  },
  getUserInfo: function(e) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})