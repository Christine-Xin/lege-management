import request from './index'
// 请求中：请求参数和返回值类型都需要进行约束
// 验证码请求
export const CaptChaAPI =():Promise<CaptChaAPIRes>=>request.get("/prod-api/captchaImage")
// 登录请求
export const LoginAPI = (params:LoginAPIReq):Promise<LoginAPIRes>=> request.post('/prod-api/login',params)