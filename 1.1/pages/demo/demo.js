// pages/demo/demo.js
let City = require('../../utils/allcity.js');
const app = getApp()

Page({

  data: {
    city:City,
    nu:null
  },
  onLoad: function (options) {
    var expnum = options.nu
    this.setData({
      nu: expnum
    })

  },
  bindtap(e){
    console.log(e.detail.test)
    this.setData({ 
      expressNum: this.data.nu,
       expressCom: e.detail.test
       })
    app.getcomExpressInfo(this.data.expressNum, this.data.expressCom, function (data) {
      wx.navigateTo({
        url: '../explist/explist?&data=' + JSON.stringify(data.data) + '&ico=' + data.ico + '&com=' + data.com + '&nu=' + data.nu,
      })
    });
  },
  input(e){
    this.value = e.detail.value
  },
  searchMt(){
    // 当没有输入的时候，默认inputvalue 为 空字符串，因为组件 只能接受 string类型的 数据 
    if(!this.value){
      this.value = '';
    }
    this.setData({
      value:this.value 
    })
  }
  
})