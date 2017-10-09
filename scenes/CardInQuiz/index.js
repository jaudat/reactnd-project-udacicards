import React, {Component} from 'react'
import {Text, TouchableOpacity} from 'react-native'

import {CenteredContentView} from '../../themes/container'
import {BlackTouchableOpacity, WhiteTouchableOpacity} from '../../themes/buttons'

export default class CardInQuiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardIndex: 0,
      correctAnswers: 0,
      stance: 'question'
    }
  }

  toggleStance = () => {
    (this.state.stance === 'question') ? this.setState({'stance': 'answer'}) : this.setState({'stance': 'question'})
  }

  handleRightAnswer = () => {
    this.setState({'correctAnswers': this.state.correctAnswers+1})
    this.setState({'cardIndex': this.state.cardIndex+1})
  }

  handleWrongAnswer = () => {
    this.setState({'cardIndex': this.state.cardIndex+1})
  }

  restartQuiz = () => {
    this.setState({'correctAnswers': 0})
    this.setState({'cardIndex': 0})
  }

  render = () => {

    if (this.state.cardIndex < this.props.navigation.state.params.questions.length) {
      const card = this.props.navigation.state.params.questions[this.state.cardIndex]
      return (
        <CenteredContentView>
          <Text style={{fontSize: 40}}>{(this.state.stance === 'question') ? card.question : card.answer}</Text>

          <TouchableOpacity style={{
            backgroundColor: 'white',
            margin: 10,
            padding: 15,
            marginBottom: 100,
          }} onPress={this.toggleStance}>
            <Text style={{color: 'red'}}>{(this.state.stance === 'question') ? 'Answer' : 'Question'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            backgroundColor: 'green',
            margin: 10,
            padding: 15,
          }} onPress={this.handleRightAnswer}>
            <Text style={{color: 'white'}}>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            backgroundColor: 'red',
            margin: 10,
            padding: 15,
          }} onPress={this.handleWrongAnswer}>
            <Text style={{color: 'white'}}>Incorrect</Text>
          </TouchableOpacity>

          <Text>{this.state.cardIndex}/{this.props.navigation.state.params.questions.length}</Text>
        </CenteredContentView>
      )
    } else {
      return (
        <CenteredContentView>
          <Text style={{fontSize: 18}}>Score:</Text>
          <Text style={{fontSize: 40, marginBottom: 100}}>
            {this.state.correctAnswers}/{this.props.navigation.state.params.questions.length}
          </Text>

          <WhiteTouchableOpacity onPress={this.restartQuiz}>
            <Text>Restart Quiz</Text>
          </WhiteTouchableOpacity>

          <BlackTouchableOpacity onPress={
            () => this.props.navigation.navigate('Home')
          }>
            <Text style={{color: 'white'}}>Back to Deck</Text>
          </BlackTouchableOpacity>
        </CenteredContentView>
      )

    }
  }
}