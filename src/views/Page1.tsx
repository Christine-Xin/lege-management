import {useSelector,useDispatch} from 'react-redux'
const View =()=>{
    // 获取仓库数据
    const {num}=useSelector((state:RootState)=>({
        num:state.num
    }))
    // 修改仓库数据
    const dispath=useDispatch()
    const changeNum=()=>{
        dispath({type:'add'})
        // dispath({type:'add2',val:10})
    }
    return (
        <div className="home">
            <p>这是page1组件 {num}</p>
            <button onClick={changeNum}>+1</button>
        </div>
    )
}

export default View