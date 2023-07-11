import React, { useEffect } from 'react';
// import classNames from "classnames";

export interface DemoProps {
  [key: string]: any;
}

const Demo: React.FC<DemoProps> = (props: DemoProps) => {
  console.log('-> window', window);
  console.log('-> wujie', window.$wujie);

  const {
    bus,
    location,
    props: AppProps = {},
    shadowRoot,
  } = window.$wujie || {};

  const { test } = AppProps;

  useEffect(() => {
    console.log('-> test', test);
  }, []);

  return (
    <React.Fragment>
      MicroServiceSubApp
      {props.children}
      props: {JSON.stringify(props)}
      <br />
      AppProps: {JSON.stringify(AppProps)}
      <br />
      <br />
    </React.Fragment>
  );
};

Demo.defaultProps = {};
Demo.propTypes = {};

export default React.memo(Demo);
