import React, {useState, useEffect, useImperativeHandle, useRef} from "react";
import {Button, Divider, Typography} from "antd";
import {getGlobalProps, getGlobalState} from "@/qiankun/lifeCycles";
import {connectMaster, useModel} from "@@/exports";
// import styles from "./index.module.less";
// import classNames from "classnames";

const {Title, Text} = Typography;

function Record(props: any) {
	const handleClick = () => {
		props.callback && props?.callback({name: 'micro-sub-app', message: '我收到你的 slogan 啦~'})
	}

	return (
		<>
			<Text>来自主应用消息: {props.slogan}</Text>
			<Button style={{marginLeft: 8}} onClick={handleClick}>Reply</Button>
		</>
	);
}

const Sub = connectMaster(Record)

const Demo = (props) => {

	console.log("-> Demo.props", props);

	const globalProps = useModel('@@qiankunStateFromMaster');

	const [qiankunProps] = useState(getGlobalProps())
	const [qiankunState, setQiankunState] = useState(getGlobalState())

	return (
		<React.Fragment>

			<Typography>
				<Title level={2}>主应用通过路由声明实现微应用加载及通信</Title>
				<Title level={4}>应用间通信</Title>
				<Divider/>
				<ul>
					<li>
						<Title level={5}>基于qiankun-apps的透传</Title>
						<Record {...qiankunProps?.defaultProps} />
						<Divider/>
					</li>
					<li>
						<Title level={5}>基于qiankun-initGlobalState</Title>
						<Record {...qiankunState} />
						<Divider/>
					</li>
					<li>
						<Title level={5}>基于umi-useModel</Title>
						<Record {...globalProps} />
						<Divider/>
					</li>
					<li>
						<Title level={5}>基于umi-connectMaster</Title>
						<Sub/>
					</li>
				</ul>
			</Typography>

		</React.Fragment>
	);
};

Demo.defaultProps = {};
Demo.propTypes = {};

export default React.memo(Demo);