import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import {CenteredContentView} from '../../themes/container'
import {BlackTouchableOpacity, WhiteTouchableOpacity} from '../../themes/buttons'
import {clearLocalNotification, setLocalNotification} from '../../utils/notification'

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
    clearLocalNotification()
      .then(setLocalNotification)
  }

  gotoHome = () => {
    clearLocalNotification()
      .then(setLocalNotification)
    return this.props.navigation.navigate('Home')
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
            marginBottom: 50,
          }} onPress={this.toggleStance}>
            <Text style={{color: 'red'}}>{(this.state.stance === 'question') ? 'Answer' : 'Question'}</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginLeft: 10, fontSize: 25}}>{this.state.cardIndex}/{this.props.navigation.state.params.questions.length}</Text>

            <View style={{flex: 1}}/>

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
          </View>

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

          <BlackTouchableOpacity onPress={this.gotoHome}>
            <Text style={{color: 'white'}}>Back to Deck</Text>
          </BlackTouchableOpacity>
        </CenteredContentView>
      )

    }
  }
}