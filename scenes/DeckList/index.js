import React from 'react'
import { FlatList} from 'react-native'

import {DeckOverview} from '../../components/DeckOverview/index'
import {getDecks} from '../../utils/decks'

export default function DeckList({navigation}) {
  const decks = Object.values( getDecks() )
  const renderDeck = ({item}) => <DeckOverview {...item} />

  return (
    <FlatList
      data={decks}
      renderItem={renderDeck}
      keyExtractor={item => item.title}
    />
  )
}
