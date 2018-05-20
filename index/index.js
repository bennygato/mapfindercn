Page({
  data: {
    latitude: 36.204824,
    longitude: 138.252924,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude:23.10229,
        longitude:113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function() {
    var that = this
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.099994,
        longitude: 113.324520,
      }]
    })
  },
  getLocation: function () {
    var that = this
    wx.getLocation({
      type: 'wgs84',
      // type: 'gcj02',
      success: function (res) {
        that.data.latitude = res.latitude
        that.data.longitude = res.longitude
        console.log(that.data.latitude)
        console.log(that.data.longitude)
        that.data.latitude = 50.000
        that.data.longitude = 50.000
        console.log("after setting: \n"+ that.data.latitude)
        console.log(that.data.longitude)

        // wx.openLocation({
        //   latitude: that.data.latitude,
        //   longitude: that.data.longitude
        // })
      }
    })
  },
  wx.chooseImage({
    success: function (res) {
      var tempFilePaths = res.tempFilePaths
      wx.saveFile({
        tempFilePath: tempFilePaths[0],
        success: function (res) {
          var savedFilePath = res.savedFilePath
        }
      })
    }
  })
})