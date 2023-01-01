import { ChangeEvent, useEffect, useState } from 'react'
import styles from './login.module.scss'
import initLoginBg from './init'
import {Input, Space, Button,message} from 'antd'
import {CaptChaAPI,LoginAPI} from '@/request/api'
import {useNavigate} from 'react-router-dom'
// import './login.less'


const view=()=>{
    useEffect(()=>{
        initLoginBg()
        window.onresize=function(){
            initLoginBg()
        }
        getImg()
    },[])
    const navigateTo= useNavigate()
    const [userName, setUserName]=useState("")
    const [password, setPassword] = useState("")
    const [captcha, setCaptcha]=useState("")
    const usernameChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setUserName(e.target.value)
    }
    const passwordChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }
    const captchaChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setCaptcha(e.target.value)
    }
    // 验证码图片信息
    const [imgSrc, setImgSrc]=useState("")
    const gotLogin=async ()=>{
        console.log(userName,password,captcha)
        if(!userName.trim() || !password.trim() || !captcha.trim()){
            alert('请输入完整信息！')
            return
        }
        let res= await LoginAPI({
            username:userName,
            password:password,
            code:captcha,
            uuid:localStorage.getItem('uuid') as string,
        })
        console.log(res)
        if(res.code===200){
            // 1:提示登录成功
            // 2:保存token
            // 3:跳转到/page1
            // 4:删除uuid
            message.success('登录成功！')
            localStorage.setItem("lege-management-token",res.token)
            navigateTo("/page1")
            localStorage.removeItem("uuid")
        }
    }
    const getImg=async ()=>{
        // captehaAPI().then((res)=>{
        //     console.log(res)
        // })
        let res= await CaptChaAPI();
        if(res.code===200){
            setImgSrc("data:image/gif;base64,"+res.img);
            localStorage.setItem("uuid",res.uuid)
        }
        console.log(res)
    }
    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{display:'block'}}></canvas>
            {/* 登录盒子 */}
            <div className={styles.loginBox}>
                <div className={styles.title}>
                    <h1>前端react学习</h1>
                    <p> Strive Everyday</p>
                </div>
                {/* 表单 */}
                <Space direction='vertical' size="large" style={{display:'flex'}}>
                    <Input placeholder='用户名' onChange={usernameChange}/>
                    <Input.Password placeholder='密码' onChange={passwordChange}/>
                    <div className='captchaBox'>
                        <Input placeholder='验证码' onChange={captchaChange}/>
                        <div className='captchaImg' onClick={getImg}>
                            <img height="38" src={imgSrc}/>
                        </div>
                    </div>
                    <Button type='primary' block className='loginBtn' onClick={gotLogin}>登录</Button>
                </Space>
            </div>
        </div>
    )
}

export default view