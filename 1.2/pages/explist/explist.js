// pages/explist/explist.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    expressInfoPic: null,
    expressInfo: null,
    expressInfonum: null,
    expressInfocom: null,
    expressError: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  setdata:function(){

  },
  onLoad: function (options) {
    var expressPic
    var expressinfo
    var expressnu
    var expresscom
    var expresserror = options.errnum
    if (expresserror == '300404' || expresserror == '300403'){
      expressPic = '/images/index.jpg'
      expresscom='无'
      expressnu = options.nu
      this.setData({
        expressInfoPic: expressPic,
        expressInfonum: expressnu,
        expressInfocom: expresscom,
        expressError: expresserror
      });
    }
    else{
      expressPic = options.ico
      expressinfo = JSON.parse(options.data)
      expressnu = options.nu
      expresscom = options.com
      this.setData({
        expressInfoPic: expressPic,
        expressInfo: expressinfo,
        expressInfonum: expressnu,
        expressInfocom: expresscom
      });
    }
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
  
  },
  secleteCom:function(){
    console.log("进入快递选择界面")
    wx.redirectTo({
      url: '../demo/demo?&nu=' + this.options.nu,
    })
  }
})