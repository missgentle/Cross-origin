interface ResolveCallback {
  (json: UJsonRespond): void;
}

class BusinessBase{

  static call( method: string, request?: any): Promise<UJsonRespond> {

    return new Promise((resolve:ResolveCallback) =>{
      this.jsonpCall(method, request ? JSON.stringify(request) : '', resolve);
    });
  }
  
  private static jsonpCall( method:string, request:string, ajaxCallBack:ResolveCallback ) {
    var URL = "";
    URL = 'http://localhost:8088/'+ method + '?json=' + encodeURI(encodeURI(request));

    $.ajax( {
      type: 'get',
      url: URL,
      // dataType: 'jsonp',
      dataType: 'json',
      //传递给请求处理程序或页面用以获得jsonp回调函数名的参数名(一般默认为:callback)
      jsonp: 'callback',
      //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
      // jsonpCallback:'balala',
      async: false,
      cache: false,
      success: function( json:UJsonRespond ) {
        if(json){
          console.log(json);
          json.method = method;
        }
        ajaxCallBack(json);
      },
    });




    // return fetch(URL, {
    //   method: 'get',
    //   headers: new Headers({
    //     'content-type': 'application/json',
    //   }),
    //   'mode': 'cors'
    //   // body: JSON.stringify("BODY")  //with GET/HEAD method cannot have body.
    // })
    // .then(function(response) {
    //   console.log(111111);
    //   // ajaxCallBack(response)
    // });


  }
}

export default BusinessBase;
