var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'content':'期待下一期',
	'cid':348
});

var optinos = {
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'PHPSESSID=os9v5g8a9erbustn0420j34ro0; imooc_uuid=30b250fe-470c-463c-aee6-d5bdfd5aa75f; imooc_isnew_ct=1461225974; IMCDNS=0; loginstate=1; apsid=c2NWM5NTAwZD5NmI2ZmVmZjVhYTZjMGE5OWI2YzYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzEzNDUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1OTIxNTE2NDhAcXEuY29tAAAAAAAAAAAAAAAAAAAAAGMzZDZkOTI0OGI1NmUxMWQyZWRiNjUxMzg5ZGY4MGJlILQYVyC0GFc%3DZT; last_login_username=592151648%40qq.com; jwplayer.qualityLabel=è¶æ¸; jwplayer.volume=60; imooc_isnew=2; cvde=571889f6ee221-261; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1459771355,1459944384,1461225991; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1462027040',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/comment/348',
		'User-Agent':'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

var req = http.request(optinos,function(res){
	console.log('Status:'+res.statusCode);
	console.log('headers:'+JSON.stringify(res.headers))

	res.on('data', function(chunk) {
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	});

	res.on('end', function() {
		console.log('评论完毕！');
	});

	req.on('error', function(e) {
		console.log('error:'+e.message);
	});

});
req.write(postData);

req.end()