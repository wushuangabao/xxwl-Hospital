// miniprogram/pages/main/content/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contents:[
      {
        title: "高度决定未来",
        content: "孩子在家里跟爸爸一起玩木板拼图，拼图的小部件比较混乱，在两个人在玩的过……",
        img_path: "/images/image.png"
      },
      {
        title: "姑姑宴（西直门店）",
        content: "棒棒鸡丝红油龙抄手徐府燃面单人餐夫妻肺片钟水饺招牌冒菜担担面",
        img_path: "/images/image.png"
      },
      {
        title: "标题3",
        content: "333333333333333333333333333333\n333333333333333333",
        img_path: "/images/image.png"
      },
      {
        title: "标题4",
        content: "44444444444444444444444444444 444444 4444444 444444444444444444444444444",
        img_path: "/images/image.png"
      },
      {
        title: "标题5",
        content: "555555555555555555555555 55555 555 555 555 5555555 55555 55555555555 5555555555555555",
        img_path: "/images/image.png"
      }
    ]
  },

goToContent:function(){
  wx.navigateTo({
    url: 'content',
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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