import React, { useRef, useState } from 'react';
import Taro from '@tarojs/taro';
import { Form } from '@tarojs/components';
import { FormContext } from '../form-context';
import { deepClone } from '../../utils/utils';
import { CommonEventFunction } from '@tarojs/components/types/common';
import { FormProps } from '@tarojs/components/types/Form';

interface Props {
  formData: { [k: string]: any }
  children: React.ReactNode
}

const MyForm: Taro.FunctionComponent<Props> = props => {
  const { formData, children } = props;
  const [_formData] = useState(deepClone(formData));
  const handleSubmit: CommonEventFunction<FormProps.onSubmitEventDetail> = () => {

    childrenRefs.forEach((ref, index) => {
        console.log(ref[`child-${index}`]);
      if (ref[`child-${index}`].current.ele === 'form-item') {
        ref[`child-${index}`].current.validate();
      }
    });
  };
  const handleReset: CommonEventFunction = (e) => {
    console.log(e.detail.value);
  };
  const value = { formData: _formData };
  let childrenRefs = (children as React.ReactNodeArray).map((_child, index) => {
    return {
      ['child-' + index]: useRef({})
    };
  });

  console.log('childrenRefs..', childrenRefs);
  return (
    <FormContext.Provider value={value}>
      <Form onSubmit={handleSubmit} onReset={handleReset}>
        {children && children.map((child, index) => React.cloneElement(child, {
          ...child.props,
          ref: childrenRefs[index][`child-${index}`],
          key: index
        }))}
      </Form>
    </FormContext.Provider>
  );
};

export default MyForm;
