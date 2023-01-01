// 这个文件专门定义请求参数的类型和响应的类型
// 验证码的响应类型
interface CaptChaAPIRes {
  msg: string;
  img: string;
  code: number;
  captchaEnabled: boolean;
  uuid: string;
}
// LoginAPIRes
interface LoginAPIReq{
    username:string;
    password:string;
    code:string;
    uuid:string;
}
interface LoginAPIRes{
    msg:string;
    code:number;
    token:string;
}