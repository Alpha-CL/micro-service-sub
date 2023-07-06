import {history} from "umi";

let qiankun_state: any;
let qiankun_props: any;

let listener: Function;

export const lifeCycles = {
    // 应用加载之前
    async bootstrap(props: any) {
        // setCreateHistoryOptions({basename: props?.base || '/'})
    },
    // 应用 render 之前触发
    async mount(props: any) {
        //  监听qiankun initState
        props.onGlobalStateChange((state: any, prev: any) => {
            qiankun_state = state
            //  简单实现个订阅
            listener?.(state, prev)
        })
        qiankun_props = props
    },
    // 应用卸载之后触发
    async unmount(props: any) {
        console.log('app1 unmount', props);
    },
};

function getGlobalProps() {
    return qiankun_props
}

function getGlobalState() {
    return qiankun_state
}

function addListener(func: Function) {
    listener = func
}

export default {
    getGlobalState,
    getGlobalProps,
    addListener
}