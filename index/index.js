Page({
  data: {
    latitude: 36.204824,
    longitude: 138.252924,

    //these are markers
    known_restaurants: [
      { id: 0,
        latitude: 42.5542873,
        longitude: -71.26417349999997, 
        label: { content: "place1", color: "#9D5257"},
      },
      { id: 1,
        latitude: 42.4262093,
        longitude: -71.06059449999998,
        label: { content: "place2", color: "#9D5257",},
      },
      { id: 2,  
        latitude: 42.4264531, 
        longitude: -71.19653440000002,
        label: { content: "place3", color: "#9D5257", },
      },
    ],
  

  },//end of data

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
  moveToCurrentLocation: function () {
    this.mapCtx.moveToLocation()
  },

  // Move designated marker to another place
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
    console.log(that.data.latitude)
    console.log(that.data.longitude)
    this.mapCtx.includePoints({
      padding: [20],
      points: that.data.known_restaurants,
    })
  },
  getCurrentLocation: function () {
    var that = this
    // wechat's getLocation() gets current users location
    wx.getLocation({
      type: 'wgs84',
      // type: 'gcj02',
      success: function (res) {
        that.data.latitude = res.latitude
        that.data.longitude = res.longitude
        console.log(that.data.latitude)
        console.log(that.data.longitude)
      }
    })
  },
})