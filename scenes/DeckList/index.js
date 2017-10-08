import React, {Component} from 'react'
import { FlatList} from 'react-native'

import {DeckOverview} from '../../components/DeckOverview/index'
import {listDecks} from '../../utils/api'

export default class DeckList extends Component {
  constructor(props) {
    super(props)
    this.state = {decks: {}}
  }

  componentDidMount = () => {
    const me = this
    listDecks().then(
      allDecks => {
        if (allDecks) me.setState({decks: Object.values(allDecks)})
      }
    )
  }

  renderDeck = ({item}) => <DeckOverview {...item} navigation={this.props.navigation}/>

  render = () =>
    <FlatList
      data={this.state.decks}
      renderItem={this.renderDeck}
      keyExtractor={item => item.title}
    />
}
