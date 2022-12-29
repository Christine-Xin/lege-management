import { ChangeEvent, useEffect, useState } from 'react'
import styles from './login.module.scss'
import initLoginBg from './init'
import {Input, Space, Button} from 'antd'
// import './login.less'


const view=()=>{
    useEffect(()=>{
        initLoginBg()
        window.onresize=function(){
            initLoginBg()
        }
    },[])
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
    const gotLogin=()=>{
        console.log(userName,password,captcha)
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
                        <div className='captchaImg'>
                            <img height="38" src=""/>
                        </div>
                    </div>
                    <Button type='primary' block className='loginBtn' onClick={gotLogin}>登录</Button>
                </Space>
            </div>
        </div>
    )
}

export default view