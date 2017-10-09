import React, {Component} from 'react'
import {Text, TextInput, TouchableOpacity} from 'react-native'

import {CenteredContentView} from '../../themes/container'
import {getDeck, submitDeck} from '../../utils/api'


export default class AddCardToDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: "",
      answer: ""
    }
  }

  onSubmit = () => {
    const title = this.props.navigation.state.params.title
    getDeck(title).then(
      allCards => {
        allCards.questions.push({question: this.state.question, answer: this.state.answer})
        submitDeck({entry: allCards, key: title}).then(
          () => this.props.navigation.navigate('DeckCover', {title: title})
        )
      }
    )
  }

  onChangeQuestion = input => this.setState({'question': input})

  onChangeAnswer = input => this.setState({'answer': input})

  render = () => {
    return (
      <CenteredContentView>
        <Text>
          Question:
        </Text>
        <TextInput
          value={this.state.question}
          onChangeText={this.onChangeQuestion}
          style={{
            marginBottom:30,
            padding: 15,
            width: 300,
          }}/>

        <Text>
          Answer:
        </Text>
        <TextInput
          value={this.state.answer}
          onChangeText={this.onChangeAnswer}
          style={{
            marginBottom: 100,
            padding: 15,
            width: 300,
        }}/>

        <TouchableOpacity onPress={this.onSubmit} style={{
          backgroundColor: 'black',
          borderColor: 'black',
          borderStyle: 'solid',
          borderWidth: 2,
          margin: 10,
          padding: 15,
        }}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </CenteredContentView>
    )
  }
}