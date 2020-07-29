import React, { useContext, useState } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { FormContext, FormItemContext } from '../form-context';
import './MyFormItem.less';
import AsyncValidator, { RuleItem } from 'async-validator';

interface Props {
  label?: string
  name: string
  children?: React.ReactNode
  rules: Array<RuleItem>
  ref: any
}

const MyFormItem: Taro.FunctionComponent<Props> = (props, ref?: any) => {
  const { label, name, rules, children } = props;
  let { formData } = useContext(FormContext);
  const [value, setValue] = useState<any>(formData[name]);
  const [errorMessage, setErrorMessage] = useState<undefined | string>('');
  const descriptor = { [name]: rules };
  const validator = new AsyncValidator(descriptor);

  const handleInput = (newValue) => {
    setValue(newValue);
    validate();
  };
  const validate = () => {
    console.log(value);
    validator.validate({ [name]: value }, undefined, errors => {
      if (errors) {
        setErrorMessage(errors[0].message);
        return;
      }
      setErrorMessage(undefined);
    });
  };
  ref.current.ele = 'form-item';
  ref.current.validate = validate;
  const context = { handleInput: handleInput, value: value };
  return (
    <FormItemContext.Provider value={context}>
      <View className='form-item'>

        <View>{label} : {name}</View>
        {/*<View><MyInput name={name} value={value} type={type} onInput={handleInput} /></View>*/}
        <View>{children}</View>
        {setErrorMessage && <View className='fi-err-msg'> {errorMessage}</View>}
      </View>
    </FormItemContext.Provider>
  );
};
export default React.forwardRef(MyFormItem);
