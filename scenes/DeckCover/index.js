import React, {Component} from 'react'
import {Text, TouchableOpacity} from 'react-native'

import {getDeck} from '../../utils/api'
import {CenteredContentView} from '../../themes/container'
import {BlackTouchableOpacity, WhiteTouchableOpacity} from '../../themes/buttons'


export default class DeckCover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: {title: '', questions: []}
    }
  }

  componentDidMount = () => {
    getDeck(this.props.navigation.state.params.title).then(
      deck => {
        if (deck) this.setState({deck})
      }
    )
  }

  render = () => {
    return (
      <CenteredContentView>
        <Text style={{fontSize: 40}}>{this.state.deck.title}</Text>
        <Text style={{fontSize: 18, marginBottom: 100}}>{this.state.deck.questions.length} cards</Text>
        <WhiteTouchableOpacity onPress={() => this.props.navigation.navigate('AddCard', {title: this.state.deck.title})}>
          <Text>Add Card</Text>
        </WhiteTouchableOpacity>
        <BlackTouchableOpacity onPress={
          () => this.props.navigation.navigate('Quiz', {title: this.state.deck.title, questions: this.state.deck.questions})
        }>
          <Text style={{color: 'white'}}>
            Start Quiz
          </Text>
        </BlackTouchableOpacity>
      </CenteredContentView>
    )
  }
}
