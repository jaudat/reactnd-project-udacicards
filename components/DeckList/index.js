import React, {Component} from 'react'
import {View, FlatList, TouchableOpacity, Text} from 'react-native'

import {DeckOverview} from './DeckOverview/index'
import {listDecks} from '../../utils/api'
import {BlackTouchableOpacity} from '../../themes/buttons'

export default class DeckList extends Component {
  constructor(props) {
    super(props)
    this.state = {decks: {}}
  }

  componentDidMount = () => {
    listDecks().then(
      allDecks => {
        if (allDecks) this.setState({decks: Object.values(allDecks)})
      }
    )
  }

  renderDeck = ({item}) => <DeckOverview {...item} navigation={this.props.navigation}/>

  render = () =>
    <View>
      <BlackTouchableOpacity onPress={() => this.props.navigation.navigate('NewDeck')}>
        <Text style={{
          color: 'white'
        }}>
          Create New Deck
        </Text>
      </BlackTouchableOpacity>

      <FlatList
        data={this.state.decks}
        renderItem={this.renderDeck}
        keyExtractor={item => item.title}
      />
    </View>
}
