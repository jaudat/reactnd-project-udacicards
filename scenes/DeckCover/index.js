import React, {Component} from 'react'
import {Text, TouchableOpacity} from 'react-native'

import {getDeck} from '../../utils/api'
import {CenteredContentView} from '../../themes/container'

export default class DeckCover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: {title: '', questions: []}
    }
  }

  componentDidMount = () => {
    const me = this
    getDeck(this.props.navigation.state.params.title).then(
      deck => {
        if (deck) me.setState({deck})
      }
    )
  }

  render = () => {
    return (
      <CenteredContentView>
        <Text style={{fontSize: 40}}>{this.state.deck.title}</Text>
        <Text style={{fontSize: 18, marginBottom: 100}}>{this.state.deck.questions.length} cards</Text>
        <TouchableOpacity style={{
          backgroundColor: 'white',
          borderColor: 'black',
          borderStyle: 'solid',
          borderWidth: 2,
          margin: 10,
          padding: 15,
        }}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: 'black',
          borderColor: 'black',
          borderStyle: 'solid',
          borderWidth: 2,
          margin: 10,
          padding: 15,
        }}>
          <Text style={{color: 'white'}} onPress={
            () => this.props.navigation.navigate('Quiz', {title: this.state.deck.title, questions: this.state.deck.questions})
          }>Start Quiz</Text>
        </TouchableOpacity>
      </CenteredContentView>
    )
  }
}
