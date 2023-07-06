import {lifeCycles} from "@/qiankun/lifeCycles";
import {qiankunFetch} from "@/qiankun/utils";

export const qiankun = {
	...lifeCycles,
	fetch: qiankunFetch,
};