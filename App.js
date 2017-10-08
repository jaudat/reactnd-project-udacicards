import React, {Component} from 'react'
import { View, StatusBar } from 'react-native'
import {StackNavigator} from 'react-navigation'
import { Constants } from 'expo'

import {FullWidthView} from './themes/container'
import {setDecks} from './utils/api'
import {listDecks} from './utils/decks'
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
  },
  // DeckCover: {
  //   screen: DeckCover
  // }
})

export default class App extends Component {
  componentDidMount = () =>
    setDecks(JSON.stringify(listDecks()))

  render() {
    return (
      <FullWidthView>
        <UdaciStatusBar background='#000000' barStyle='light-content'/>
        <Stack />
      </FullWidthView>
    )
  }
}
