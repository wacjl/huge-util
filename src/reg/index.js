//正整数
export const intReg = /^[1-9][0-9]*$/;
//包含一位小数的正数
export const float1Reg = /^[0-9]+([.]{1}[0-9]{1,1})?$/;
export const emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
export const idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
export const phoneReg = /^1[3456789]\d{9}$/;
//支持座机号码和移动手机
export const telReg = /^((0\d{2,3}-\d{7,8})|(1\d{10}))$/;
//英文，数字，下划线
export const code_NumReg = /^\w+$/;
export const ipReg = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
