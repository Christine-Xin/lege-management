import {Breadcrumb,Layout,Menu,theme} from 'antd'
import React,{useState} from "react"
import {useNavigate,Outlet} from 'react-router-dom'
import MenuPage from '../components/Menu'

const {Header,Content,Footer,Sider}=Layout


const View : React.FC=()=>{
    
    const {
        token:{colorBgContainer}
    }= theme.useToken()
    const [collapsed,setCollapsed] =useState(false)
    return (
        <Layout style={{minHeight:'100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value)=>setCollapsed(value)}>
                <div style={{height:32, margin:16, background: 'rgba(255, 255, 255, 0.2)'}}/>
                <MenuPage/>
            </Sider>
            <Layout className="site-layout">
                <Header style={{padding:0, background:colorBgContainer, paddingLeft:'16px'}}>
                    <Breadcrumb style={{ lineHeight:'64px'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content style={{ margin: '16px 16px 0' ,padding: 24, minHeight: 360, background: colorBgContainer}}>
                    <Outlet/>
                 
                </Content>
                <Footer style={{ textAlign: 'center',padding:0,lineHeight:'48px' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

export default View