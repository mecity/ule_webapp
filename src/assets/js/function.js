/*
	公共方法调用模块

*/

import { Toast,Indicator } from 'mint-ui';

// import MD5 from "md5";
var MD5 = require('md5.js')


/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		/*
		把字符串解析成json对象，
		比如有时候我们传入一个{name:'dsdsa'},
		这个时候js是当成字符串的，
		如果我们的本意是传入的是一个json对象的话 这时候就需要这样处理了
		*/
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return false;
	return window.localStorage.getItem(name);
}


/*公共方法*/


/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}


/**
 * 存储sessionStorage
 */
export const setsessionStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		/*
		把字符串解析成json对象，
		比如有时候我们传入一个{name:'dsdsa'},
		这个时候js是当成字符串的，
		如果我们的本意是传入的是一个json对象的话 这时候就需要这样处理了
		*/
		content = JSON.stringify(content);
	}
	window.sessionStorage.setItem(name, content);
}

/**
 * 获取sessionStorage
 */
export const getsessionStore = name => {
	if (!name) return;
	return window.sessionStorage.getItem(name);
}


/**
 * 删除sessionStorage
 */
export const removesessionStore = name => {
	if (!name) return;
	window.sessionStorage.removeItem(name);
}


/**
*验证登录账户：邮箱
*/

export const checkEmail = str => {
	let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	return reg.test(str);
}


/*
*验证密码
*/
export const checkPass = pass =>{
	let reg = /^[A-Za-z0-9]{6,40}$/;
	return reg.test(pass);
}


/*
	md5加密
*/

export const createdMd5 = args => {
	args=args.toString();/*转字符串*/
	let md5stream = new MD5();
	return md5stream.update(args).digest('hex');
}


/*异常提醒*/
export const alertToast=(str,position='middle',duration=3000)=>{
	Toast({
			message: str,
			position: position,
			duration: duration
	});

}

/*loading*/
export const loadingAlert=(str='加载中...',icontype=1)=>{
	let spinnerType='';
	switch(icontype){
		case 1:
		spinnerType='fading-circle';
		break;
		case 2:
		spinnerType='snake';
		break;
		case 3:
		spinnerType='double-bounce';
		break;
		case 4:
		spinnerType='triple-bounce';
		break;
		default:
		spinnerType='fading-circle';
		break;
	}
	Indicator.open({
		text: str,
		spinnerType: spinnerType
	});

}

/*关闭loading*/
export const loadingClose=()=>{
	Indicator.close();
}



/*
返回时间
@tag:中间的连接字符 默认是空格
@format 返回格式 默认是格式化日期 如果是timestamp则返回时间戳
return string
*/
export function getFormatTime(tag='-',full='all',format='time') {

	let datetime=new Date();/*时间戳*/

	if(format!='time'){
		return datetime.getTime();
	}else{
		let returnString='';
		switch(full){
			case 'all':
				returnString=datetime.getFullYear()+tag+datetime.getMonth()+tag+datetime.getDate()+' '+datetime.getHours()+":"+datetime.getMinutes()+":"+datetime.getSeconds();
			break;
			case 'date':
				returnString=datetime.getFullYear()+tag+datetime.getMonth()+tag+datetime.getDate();
			break;
			case 'year':
				returnString=datetime.getFullYear();
			break;
			case 'month':
				returnString=datetime.getMonth();
			break;
			case 'day':
				returnString=datetime.getDate();
			break;
			default:
				returnString=datetime.getFullYear()+tag+datetime.getMonth()+tag+datetime.getDate()+' '+datetime.getHours()+":"+datetime.getMinutes()+":"+datetime.getSeconds();
			break;

		}

		return returnString;

	}

}




/*字符串截取包含中文*/
export const subStrings=(str, n)=> {

  if (str.replace(/[\u4e00-\u9fa5]/g, "**").length <= n) {
    return str;
  } else {
	let len = 0;
	let tmpStr = "";
    for (let i = 0; i < str.length; i++) {//遍历字符串
      if (/[\u4e00-\u9fa5]/.test(str[i])) {//中文 长度为两字节
        len += 2;
      }
      else {
        len += 1;
      }
      if (len > n) {
        break;
      }
      else {
        tmpStr += str[i];
      }
    }
    return tmpStr + " ...";
  }
};




