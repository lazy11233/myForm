import React, { useContext, useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { Input } from '@tarojs/components';
import './MyInput.less';
import { CommonEventFunction } from '@tarojs/components/types/common';
import { InputProps } from '@tarojs/components/types/Input';
import { FormItemContext } from '../form-context';

interface IProps {
  name: string
  // value: any
  type?: 'text' | 'number' | 'idcard' | 'digit' | undefined
  onInput?: CommonEventFunction<InputProps.inputEventDetail>
}

const MyInput: Taro.FunctionComponent<IProps> = props => {
  const { type, onInput, name } = props;
  const [value, setValue] = useState<any>();
  const context = useContext(FormItemContext);
  console.log(context);

  useEffect(() => {
    if(context) {
      setValue(context.value)
    }
  }, [])

  const inputHandler: CommonEventFunction<InputProps.inputEventDetail> = (e) => {
    setValue(e.detail.value);
    if (context) {
      context.handleInput(e.detail.value);
    }
    if (onInput) {
      onInput(e);
    }
  };
  return <Input className='my-input' name={name} value={value} type={type} onInput={inputHandler} />;
};

export default MyInput;

MyInput.defaultProps = {
  type: 'text'
};
