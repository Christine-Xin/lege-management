import reducer from './reducer.ts'
import {applyMiddleware, combineReducers, legacy_createStore, compose} from 'redux'
import handleNum from './NumStatus/reducer'
import reduxThunk from 'redux-thunk'

const reducers=combineReducers({
    handleNum,
})

// 创建数据仓库
// const store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// 支持异步得写法：使用resux-thunk
let composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;
const store= legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)))

export default store;