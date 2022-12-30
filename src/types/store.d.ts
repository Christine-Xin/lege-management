// 类型声明文件不要直接使用import ... from ...
type RootState = ReturnType<typeof import("@/store").getState>

interface Window{
    __REDUX_DEVTOOLS_EXTENSION__:function;
}