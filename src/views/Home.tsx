import React,{useState} from "react"
import {DesktopOutlined,FileOutlined,PieChartFilled,TeamOutlined,UserOutlined} from '@ant-design/icons'
import {Breadcrumb,Layout,Menu,theme} from 'antd'
import type {MenuProps} from 'antd'
const {Header,Content,Footer,Sider}=Layout

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

const View =()=>{
    return (
        <div className="home">
            <p>这是Home组件</p>
        </div>
    )
}

export default View