import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import Drag from '../../components/drag';
import './index.less'

interface IProps {}

const DragView: Taro.FunctionComponent<IProps> = props => {
  console.log(props)
  return <View>
    <View>拖动页面</View>
    <Drag />
  </View>
}

export default DragView
