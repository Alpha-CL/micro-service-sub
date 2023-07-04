import React, {useState, useEffect, useImperativeHandle, useRef} from "react";
// import styles from "./index.module.less";
// import classNames from "classnames";
// import CSSMotion from 'rc-motion';

const Demo = (props) => {

    return (
        <React.Fragment>

            DemoComp
            {props.children}
            props: {JSON.stringify(props)}<br/>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>


        </React.Fragment>
    );
};

Demo.defaultProps = {};
Demo.propTypes = {};

export default React.memo(Demo);