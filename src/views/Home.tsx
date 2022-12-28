import React,{useState} from "react"
import {DesktopOutlined,FileOutlined,PieChartOutlined,TeamOutlined,UserOutlined} from '@ant-design/icons'
import {Breadcrumb,Layout,Menu,theme} from 'antd'
import type {MenuProps} from 'antd'
import {useNavigate,Outlet} from 'react-router-dom'

const {Header,Content,Footer,Sider}=Layout

// required字段会将MenuProps这个接口中选择的字段，变为必须字段
// type自定义一个叫做MenuItem 的类型
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label:React.ReactNode,
    key:React.Key,
    icon?:React.ReactNode,
    children?:MenuItem[]

):MenuItem{
    return {
        key,
        icon,
        children,
        label
    } as MenuItem
}
// items是一个MenuItem类型的数组
const items:MenuItem[]=[
    getItem('Option 1', 'page1', <PieChartOutlined />),
    getItem('Option 2', 'page2', <DesktopOutlined />),
    getItem('User', 'page3', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
    ]
const View : React.FC=()=>{
    const nativeTo=useNavigate()
    const [collapsed,setCollapsed] =useState(false)
    const [openKeys, setOpenKeys]=useState([''])
    const {
        token:{colorBgContainer}
    }= theme.useToken()

    const menuClick=(e:{key:string})=>{
        console.log(e.key)
        nativeTo(e.key)
    }
    // 菜单项展开和回收,只展开一项
    const handleOpenChange=(keys:string[])=>{
        console.log(keys)
        setOpenKeys([keys[keys.length-1]])
    }
    return (
        <Layout style={{minHeight:'100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value)=>setCollapsed(value)}>
                <div style={{height:32, margin:16, background: 'rgba(255, 255, 255, 0.2)'}}/>
                <Menu 
                    theme="dark" 
                    defaultSelectedKeys={['page1']} 
                    mode="inline" 
                    items={items} 
                    onClick={menuClick} 
                    onOpenChange={handleOpenChange}
                    openKeys={openKeys}
                ></Menu>
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