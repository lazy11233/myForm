import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.less'

interface IProps {}

const Drag: Taro.FunctionComponent<IProps> = props => {
  console.log(props)
  return <View>可拖动排序组件</View>
}

export default Drag
