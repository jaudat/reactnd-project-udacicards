import React, {Component} from 'react'
import { View, StatusBar } from 'react-native'
import {StackNavigator} from 'react-navigation'
import { Constants } from 'expo'

import {FullWidthView} from './themes/container'

import DeckList from './components/DeckList'
import DeckCover from './components/DeckCover'
import CardInQuiz from './components/CardInQuiz'
import AddCardToDeck from './components/AddCardToDeck'
import CreateNewDeck from './components/CreateNewDeck'

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
  DeckCover: {
    screen: DeckCover
  },
  Quiz: {
    screen: CardInQuiz
  },
  AddCard: {
    screen: AddCardToDeck
  },
  NewDeck: {
    screen: CreateNewDeck
  }
})

export default class App extends Component {

  render() {
    return (
      <FullWidthView>
        <UdaciStatusBar background='#000000' barStyle='light-content'/>
        <Stack />
      </FullWidthView>
    )
  }
}
