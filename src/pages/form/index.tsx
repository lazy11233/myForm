import React from 'react';
import { Button, View } from '@tarojs/components';
import MyForm from '../../components/form/MyForm';
import MyFormItem from '../../components/form-item/MyFormItem';
import MyInput from '../../components/input/MyInput';

const FormPage = () => {
  const formData = {
    name: '',
    mail: ''
  };

  return (
    <View>
      <MyForm formData={formData}>
        <MyFormItem
          label="用户名"
          name="name"
          rules={[{ required: true, message: '用户名不能为空' }]}
        >
          <MyInput name="name" type="text" />
        </MyFormItem>
        <MyFormItem
          label="邮箱"
          name="mail"
          rules={[
            { required: true, message: '邮箱不能为空' },
            { type: 'email', message: '邮箱格式不正确' }
          ]}
        >
          <MyInput name="name" type="text" />
        </MyFormItem>
        <Button type='primary' formType='submit'>提交</Button>
        <Button type='primary' formType='reset'>重置</Button>
      </MyForm>
    </View>
  );
};
export default FormPage;
