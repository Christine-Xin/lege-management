import {useNavigate,Outlet,useLocation} from 'react-router-dom'
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
    getItem('Option 1', '/page1', <PieChartOutlined />),
    getItem('Option 2', '/page2', <DesktopOutlined />),
    getItem('User', '/page3', <UserOutlined />, [
        getItem('Tom', '/page301'),
        getItem('Bill', '/page302'),
        getItem('Alex', '/page303'),
    ]),
    getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
    ]
const Comp:React.FC=()=>{
        // 路由
        const currentRoute=useLocation()
        console.log(currentRoute.pathname)
    /***
     * 设置当前展开的菜单项
     * 将currentRoute.pathname跟items数组得每一项children得key值进行对比，如果相等，就要上一级得key ,将key给到openkeys
     */
    let firstOpenKey:string=""

    function findKey(obj:{key:string}){
        return obj.key===currentRoute.pathname
    }    
   for(let i=0;i<items.length;i++){
    if(items[i]!['children'] && items[i]!['children'].length && items[i]!['children'].find(findKey)){
        firstOpenKey = items[i]!.key as string;
        break;
    }
   }

    const [openKeys, setOpenKeys]=useState([firstOpenKey])
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
        defaultSelectedKeys={[currentRoute.pathname]} 
        mode="inline" 
        items={items} 
        onClick={menuClick} 
        onOpenChange={handleOpenChange}
        openKeys={openKeys}
    ></Menu>
    )
}

export default Comp;