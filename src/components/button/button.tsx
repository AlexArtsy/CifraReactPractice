import React from 'react';
import { Button, ButtonProps } from 'antd';

interface IProps extends ButtonProps {}

const MyButton: React.FC<IProps> = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

export default MyButton;
