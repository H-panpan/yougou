function wxrequest(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url:options.url,
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