import {history} from "@@/core/history";

export async function qiankunFetch(url: string, ...args: any[]) {
	console.log("-> micro-app-chat qiankunFetch", url, args);
	//  拦截子应用加载资源失败的情况处理
	try {
		return await window.fetch(url, ...args);
	} catch (e) {
		history.push('/404', {message: '微应用加载失败，请检查应用是否可运行'})
	}
	return {
		async text() {
			return '';
		},
	}
}