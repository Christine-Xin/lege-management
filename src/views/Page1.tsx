import {useSelector,useDispatch} from 'react-redux'
import numStatus from '@/store/NumStatus'
const View =()=>{
    // 获取仓库数据
    const {num}=useSelector((state:RootState)=>({
        num:state.handleNum.num
    }))
    // 修改仓库数据
    const dispath=useDispatch()
    const changeNum=()=>{
        dispath({type:'add'})
        // dispath({type:'add2',val:10})
    }
    // 异步:使用redux-thunk
    const changeNum2=()=>{
        // dispath((dis:Function)=>{
        //     setTimeout(() => {
        //         dis({type:'add2',val:10})
        //     },1000);
        // })
        // 优化写法
        dispath(numStatus.asyncActions.asyncAdd2)
    }
    return (
        <div className="home">
            <p>这是page1组件 {num}</p>
            {/* 同步加1 */}
            <button onClick={changeNum}>同步+1</button>
            {/* 异步加10 */}
            <button onClick={changeNum2}>异步+10</button>
        </div>
    )
}

export default View