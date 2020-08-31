import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onClick = () => {
    Taro.navigateTo({
      url: '/pages/drag-view/index'
    }).then()
  }

  render () {
    return (
      <View className='index'>
        <Button onClick={() => this.onClick()}>表单校验</Button>
      </View>
    )
  }
}
