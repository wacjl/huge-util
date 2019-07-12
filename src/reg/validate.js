export const intNumberVali = (rule, value, callback) => {
  const reg = /^[1-9][0-9]*$/; //正整数
  if (value && !reg.test(value)) {
    callback(new Error("只能输入正整数"));
  } else {
    callback();
  }
};
export const FloatNumber1Vali = (rule, value, callback) => {
  const reg = /^[0-9]+([.]{1}[0-9]{1,1})?$/;
  if (value && !reg.test(value)) {
    callback(new Error("只能输入可包含1位小数的正数"));
  } else {
    callback();
  }
};
export const emailVali = (rule, value, callback) => {
  const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
  const g = regVariable.test(value);
  if (value && !g && !reg.test(value)) {
    callback(new Error("邮件地址格式有误"));
  } else {
    callback();
  }
};
export const phoneVali = (rule, value, callback) => {
  const reg = /^1\d{10}$/;
  const g = regVariable.test(value);
  if (value && !g && !reg.test(value)) {
    callback(new Error("电话号码格式有误"));
  } else {
    callback();
  }
};
//支持座机和手机
export const tel_phoneVali = (rule, value, callback) => {
  const reg = /^((0\d{2,3}-\d{7,8})|(1\d{10}))$/;
  const g = regVariable.test(value);
  if (value && !g && !reg.test(value)) {
    callback(new Error("电话号码格式有误"));
  } else {
    callback();
  }
};
export const idCardVali = (rule, value, callback) => {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if (value && !reg.test(value)) {
    callback(new Error("身份证格式不正确"));
  } else {
    callback();
  }
};
export const bankCardVali = (rule, value, callback) => {
  const reg = /(^\d{16,19}$)/;
  if (value && !reg.test(value)) {
    callback(new Error("银行卡号格式不正确"));
  } else {
    callback();
  }
};
export const codenumVali = (rule, value, callback) => {
  const reg = /^[0-9a-zA-Z]+$/;
  if (value && !reg.test(value)) {
    callback(new Error("只能输入英文字母和数字"));
  } else {
    callback();
  }
};
//英文数字下划线
export const code_NumVali = (rule, value, callback) => {
  const reg = /^\w+$/;
  if (value && !reg.test(value)) {
    callback(new Error("请输入英文、数字字符或者下划线"));
  } else {
    callback();
  }
};
//不包含中文
export const notContainChVali = (rule, value, callback) => {
  const reg = /[\u4e00-\u9fa5]+/;
  if (value && reg.test(value)) {
    callback(new Error("输入不能包含中文"));
  } else {
    callback();
  }
};
