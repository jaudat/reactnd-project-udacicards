import React from 'react'
import { View, StatusBar } from 'react-native'
import {StackNavigator} from 'react-navigation'
import { Constants } from 'expo'

import {FullWidthView} from './themes/container'
import DeckList from './scenes/DeckList'

function UdaciStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const Stack = StackNavigator({
  Home: {
    screen: DeckList
  }
})

export default class App extends React.Component {
  render() {
    return (
      <FullWidthView>
        <UdaciStatusBar background='#000000' barStyle='light-content'/>
        <Stack />
      </FullWidthView>
    )
  }
}
