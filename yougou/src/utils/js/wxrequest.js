function wxrequest(options){
  return new Promise((resolve,reject)=>{
    if(!options.baseUrl){
      options.baseUrl = "https://autumnfish.cn/wx/"
    }
    wx.request({
      url:options.baseUrl + options.url,
      method:options.method || "GET",
      data:options.data || {},
      header:options.header || {},
      success:function(res){
        resolve(res)
      },
      fail:function(err){
        reject(err)
      }
    })
  })
}

export default wxrequest