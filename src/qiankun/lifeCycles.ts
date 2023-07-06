let qiankunProps: any;
let qiankunState: any;
let listener: Function;

export const lifeCycles = {
	/**
	 * 应用加载之前
	 * @param props
	 */
	async bootstrap(props: any) {
		console.log("-> micro-app-chat bootstrap", props);
		// setCreateHistoryOptions({basename: props?.base || '/'})
	},
	/**
	 * 应用 render 之前触发
	 * @param props
	 */
	async mount(props: any) {
		console.log("-> micro-app-chat mount", props);
		//  监听qiankun initState
		props.onGlobalStateChange((state: any, prev: any) => {
			console.log("-> onGlobalStateChange", state, prev);
			qiankunState = state
			//  简单实现个订阅
			listener?.(state, prev)
		})
		qiankunProps = props
	},
	/**
	 * 应用卸载之后触发
	 * @param props
	 */
	async unmount(props: any) {
		console.log('-> micro-app-chat unmount', props);
	},
	/**
	 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
	 * @param props
	 */
	async update(props: any) {
		console.log("-> micro-app-chat update", props);
	}
};

export function getGlobalProps() {
	return qiankunProps
}

export function getGlobalState() {
	return qiankunState
}

export function addListener(func: Function) {
	listener = func
}