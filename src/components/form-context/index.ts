import { createContext } from 'react';

export const FormContext = createContext({
  formData: {},
});

export const FormItemContext = createContext({
  handleInput: (value: any) => {return value;},
  value: ''
});
