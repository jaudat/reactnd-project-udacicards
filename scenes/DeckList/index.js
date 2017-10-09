import React, {Component} from 'react'
import {View, FlatList, TouchableOpacity, Text} from 'react-native'

import {DeckOverview} from '../../components/DeckOverview/index'
import {listDecks} from '../../utils/api'

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
      <FlatList
        data={this.state.decks}
        renderItem={this.renderDeck}
        keyExtractor={item => item.title}
      />
    </View>
}
