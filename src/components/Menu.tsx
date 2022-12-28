import {useNavigate,Outlet} from 'react-router-dom'
import {Menu} from 'antd'
import {theme} from 'antd'
import type {MenuProps} from 'antd'
import React,{useState} from "react"
import {DesktopOutlined,FileOutlined,PieChartOutlined,TeamOutlined,UserOutlined} from '@ant-design/icons'
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
const Comp:React.FC=()=>{
    
    const [openKeys, setOpenKeys]=useState([''])
    const nativeTo=useNavigate()


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
        <Menu 
        theme="dark" 
        defaultSelectedKeys={['page1']} 
        mode="inline" 
        items={items} 
        onClick={menuClick} 
        onOpenChange={handleOpenChange}
        openKeys={openKeys}
    ></Menu>
    )
}

export default Comp;