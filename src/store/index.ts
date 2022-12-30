import reducer from './reducer.ts'
import {combineReducers, legacy_createStore} from 'redux'
import handleNum from './NumStatus/reducer'

const reducers=combineReducers({
    handleNum,
})

// 创建数据仓库
const store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;