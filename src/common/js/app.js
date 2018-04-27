import Android from './android'
import Ios from './ios'
import md5 from './md5'

class App {
  constructor() {

  }
  /**
   * 
   * @desc   为元素添加class
   * @param  {HTMLElement} ele 
   * @param  {String} cls 
   */
  hasClass(ele, cls) {
    return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
  }
  /**
   * 
   * @desc 判断元素是否有某个class
   * @param {HTMLElement} ele 
   * @param {String} cls 
   * @return {Boolean}
   */
  addClass(ele, cls) {
    if (!this.hasClass(ele, cls)) {
      ele.className += ' ' + cls;
    }
  }
  /**
   * 
   * @desc 为元素移除class
   * @param {HTMLElement} ele 
   * @param {String} cls 
   */
  removeClass(ele, cls) {
    if (this.hasClass(ele, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      ele.className = ele.className.replace(reg, ' ');
    }
  }
  /**
   * 
   * @desc   判断`obj`是否为空
   * @param  {Object} obj
   * @return {Boolean}
   */
  isEmptyObject(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj))
      return false
    return !Object.keys(obj).length
  }
  /**
   * 
   * @desc 随机生成颜色
   * @return {String} 
   */
  randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
  }
  /**
   * 
   * @desc 生成指定范围[min, max]的随机数
   * @param  {Number} min 
   * @param  {Number} max 
   * @return {Number} 
   */
  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * 
   * @desc   判断是否为邮箱地址
   * @param  {String}  str
   * @return {Boolean} 
   */
  isEmail(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
  }
  /**
   * 
   * @desc  判断是否为身份证号
   * @param  {String|Number} str 
   * @return {Boolean}
   */
  isIdCard(str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
  }
  /**
   * 
   * @desc   判断是否为手机号
   * @param  {String|Number} str 
   * @return {Boolean} 
   */
  isPhoneNum(str) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
  }

  RandomNumBoth(Min, Max) {
    let Range = Max - Min;
    let Rand = Math.random();
    let num = Min + Math.round(Rand * Range); //四舍五入
    return num;
  }
  /**
   * 
   * @desc   判断是否为URL地址
   * @param  {String} str 
   * @return {Boolean}
   */
  isUrl(str) {
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
  }
  /**
   * 
   * @desc   现金额转大写
   * @param  {Number} n 
   * @return {String}
   */
  digitUppercase(n) {
    var fraction = ['角', '分'];
    var digit = [
      '零', '壹', '贰', '叁', '肆',
      '伍', '陆', '柒', '捌', '玖'
    ];
    var unit = [
      ['元', '万', '亿'],
      ['', '拾', '佰', '仟']
    ];
    var head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
      s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
      var p = '';
      for (var j = 0; j < unit[1].length && n > 0; j++) {
        p = digit[n % 10] + unit[1][j] + p;
        n = Math.floor(n / 10);
      }
      s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整');
  }

  getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }

  getUrlVars(url) {
    var vars = [],
      hash;
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }
  modelType() {
    let model = ''
    if (this.browser().ios) {
      console.log(MobileDevice.getModels().join(' or '))
      if (MobileDevice.getModels().join(' or ') == 'unknown') {
        model = '无法获取'
      } else {
        model = MobileDevice.getModels().join(' or ')
      }

    } else if (this.browser().android) {
      let android = new Android(navigator.userAgent);
      Array.prototype.contains = (needle) => {
        for (i in this) {
          if (this[i].indexOf(needle) > 0)
            return i;
        }
        return -1;
      }
      let device_type = navigator.userAgent; //获取userAgent信息  
      let models = "";
      let sss = device_type.split(";");
      let i = 2
      if (i > -1) {
        models = sss[i].substring(0, sss[i].indexOf("Build/"));
      }
      model = models

    } else {
      console.log('ERROR')
    }

    return model
  }
  browser() {
    let u = navigator.userAgent;
    let app = navigator.appVersion;
    return {
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
      qq: u.match(/\sQQ/i) == " qq" //是否QQ
    };
  }
  objKeySort(arys) {
    //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    var newkey = Object.keys(arys).sort();

    var newObj = {};
    for (var i = 0; i < newkey.length; i++) {
      newObj[newkey[i]] = arys[newkey[i]];
    }
    return newObj;
  }
  encrSort(config) {
    let timestamp = (new Date()).valueOf();
    let user_agent = navigator.userAgent;
    let nonce = md5(user_agent + timestamp);
    config.data.timestamp = timestamp
    config.data.nonce = nonce
    config.data.os = this.browser().ios ? 2 : this.browser().android ? 1 : 0
    let data = this.objKeySort(config.data)
    let str = ''
    for (var i in data) {
      str += data[i]
    }
    data.thqz_sign = md5(str)
    return config.data = data
  }
}

export default new App()
