import React, {Component} from'react'
import {Text, TextInput} from 'react-native'

import {CenteredContentView} from '../../themes/container'
import {BlackTouchableOpacity} from '../../themes/buttons'
import {submitDeck} from '../../utils/api'

export default class CreateNewDeck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ""
    }
  }

  onChangeTitle = input => {
    this.setState({'title': input})
  }

  handleSubmit = () => {
    const title = this.state.title
    submitDeck({entry: {title: title, questions: []}, key: title}).then(
      () => this.props.navigation.navigate('DeckCover', {title: title})
    )
  }

  render = () => {
    return (
      <CenteredContentView>
        <Text style={{fontSize: 40, marginBottom: 20, padding: 10}}>
          What is the title of your new deck?
        </Text>

        <TextInput
          value={this.state.title}
          onChangeText={this.onChangeTitle}
          style={{
            marginBottom:100,
            padding: 15,
            width: 300,
          }}/>

        <BlackTouchableOpacity onPress={this.handleSubmit}>
          <Text style={{color: 'white'}}>
            Submit
          </Text>
        </BlackTouchableOpacity>
      </CenteredContentView>
    )
  }
}