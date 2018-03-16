// pages/explist/explist.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    expressInfoPic: null,
    expressInfo: null,
    expressInfonum: null,
    expressInfocom: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  setdata:function(){

  },
  onLoad: function (options) {
    var expressPic = options.ico
    var expressinfo  = JSON.parse(options.data);
    var expressnu = options.nu
    var expresscom = options.com
    this.setData({
      expressInfoPic:expressPic,
      expressInfo: expressinfo,
      expressInfonum: expressnu,
      expressInfocom: expresscom
    });
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