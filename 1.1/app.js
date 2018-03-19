//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
            if (res.code) {
              //发起网络请求
              wx.request({
                url: 'https://p8gmzm2p.qcloud.la/',
                data: {
                  code: res.code
                }
              })
            } else {
              console.log('获取用户登录态失败！' + res.errMsg)
              wx.showToast({
                title: '登录失败请重试',
                icon: 'none',
                duration: 2000
              })
            }
          }
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {

        }
        })
      }
        wx.getUserInfo({
          success: res => {
            // 可以将 res 发送给后台解码出 unionId
            this.globalData.userInfo = res.userInfo
            
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            if (this.userInfoReadyCallback) {
              this.userInfoReadyCallback(res)
            }
          }
        })
          }
    })
  },
  getExpressInfo:function(nu,cb){
    wx.request({
      url: 'http://aliapi.kuaidi.com/kuaidiinfo?&order=desc&muti=0&nu='+nu,
      data: {
      },
      header: {
        Authorization:'APPCODE 43bc3e62b7b745d9a92549df884c8a28'
      },
      success: function (res) {
        if (res.data.errNum == '300404'){
          wx.showModal({
            title: '单号查不到物流信息',
            content: '是否手动选择快递公司',
            success: function (res2) {
              if (res2.confirm) {
                console.log('用户点击确定')
                console.log(res.data.nu)
                wx.navigateTo({
                  url: '../demo/demo?&nu=' + res.data.nu,
                })
              } else if (res2.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (res.data.errNum == '300403'){
          wx.showModal({
            title: '无法根据单号匹配公司',
            content: '是否手动选择快递公司',
            success: function (res2) {
              if (res2.confirm) {
                console.log('用户点击确定')
                console.log(res.data.nu)
                wx.navigateTo({
                  url: '../demo/demo?&nu=' + res.data.nu,
                })
              } else if (res2.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (res.data.errNum == '300402') {
          wx.showToast({
            title: '请输入快递单号',
            icon: 'none',
            duration: 2000
          })
        }
        else if (res.data.errNum == '300401') {
          wx.showToast({
            title: '快递网授权码无效，请联系客服',
            icon: 'none',
            duration: 2000
          })
        }
        else{
          cb(res.data)
        }
      }
    })
  },
  getcomExpressInfo: function (nu,com,cb) {
    wx.request({
      url: 'http://aliapi.kuaidi.com/kuaidiinfo?&order=desc&muti=0&nu=' + nu+'&com='+com,
      data: {
      },
      header: {
        Authorization: 'APPCODE 43bc3e62b7b745d9a92549df884c8a28'
      },
      success: function (res) {
        if (res.data.errNum == '300404') {
          wx.showModal({
            title: '单号查不到物流信息',
            content: '是否手动选择快递公司',
            success: function (res2) {
              if (res2.confirm) {
                console.log('用户点击确定')
                console.log(res.data.nu)
                wx.navigateTo({
                  url: '../demo/demo?&nu=' + res.data.nu,
                })
              } else if (res2.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (res.data.errNum == '300403') {
          wx.showModal({
            title: '无法根据单号匹配公司',
            content: '是否手动选择快递公司',
            success: function (res2) {
              if (res2.confirm) {
                console.log('用户点击确定')
                console.log(res.data.nu)
                wx.navigateTo({
                  url: '../demo/demo?&nu=' + res.data.nu,
                })
              } else if (res2.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (res.data.errNum == '300402') {
          wx.showToast({
            title: '请输入快递单号',
            icon: 'none',
            duration: 2000
          })
        }
        else if (res.data.errNum == '300401') {
          wx.showToast({
            title: '快递网授权码无效，请联系客服',
            icon: 'none',
            duration: 2000
          })
        }
        else {
          cb(res.data)
        }
      }
    })
  },
  /*
  //该段为快递https://www.showapi.com/ 网站接口数据
  getExpressInfo: function (nu, cb) {
    wx.request({
      url: 'https://route.showapi.com/64-19?&com=auto&showapi_appid=59109&showapi_sign=4faa198af9634d5ab74b04d467c44d3b&nu=535962308717' + nu, 

      data: {
      },
      header: {
      },
      success: function (res) {
        cb(res.data)
        //console.log(res.data)
      }
    })
  },
  */
  globalData: {
    userInfo: null
  }
})