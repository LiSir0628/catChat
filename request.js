// let baseURL='https://fish.mini.zhishukongjian.com/';
//let baseURL = 'https://user.mini.zhishukongjian.com/';
let baseURL='https://api.domefish.com/';

function myRequest(options){
	let headers={}
	var Token = uni.getStorageSync('token') || '';
	headers['lang'] = uni.getStorageSync('languageIso') || 'en';
	headers['platform'] = 3;
	headers['version'] = 1.01;
	headers['brand'] = '';
	headers['deviceid'] = '';
	headers['devicemodel'] = '';
	headers['signature'] = 'asdfghjkl';
	headers['token'] = Token;
	headers["Content-Type"] = 'application/x-www-form-urlencoded';
	// #ifdef MP-WEIXIN
	headers["Isminiapp"] = "TRUE";
	// #endif
	return new Promise((res,rej)=>{
		uni.request({
			url: options.url.indexOf("http") == -1 ? baseURL + options.url : options.url.replace("https://user.mini.zhishukongjian.com","https://api.domefish.com/api"),
			//url:baseURL + options.url,
			method:options.method || 'GET',
			data:options.data,
			header:headers,
			success(data) {
				// console.log(data)
				if(data.data.code==200){
					res(data)
				} else if(data.data.code==401){
					//需要权限验证, token未传或错误
					uni.setStorageSync('areaName', "");
					uni.setStorageSync('token', "");
					uni.setStorageSync('index_is_refresh', "1");
					// uni.redirectTo({url:'/pages/register/login'});
					return false;
				} else if(data.data.code==404){
					//请求的内容为空
					res(data)
				} else{
					//其他状态
					res(data)
				}
			},
			fail(err) {
				//console.log(err);
				rej(err)
			}
		})
	})
	
}
export default myRequest;