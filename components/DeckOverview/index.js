import React from 'react'
import {Text, View, TouchableHighlight} from 'react-native'

import {CenteredContentView} from '../../themes/container'

export const DeckOverview = ({navigation, title, questions}) => {
  return (
    <CenteredContentView style={{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      paddingTop: 20,
      paddingRight: 20,
      paddingBottom: 20,
      paddingLeft: 20,
    }}>
      <TouchableHighlight style={{
        backgroundColor: 'yellow',
        flex: 1,
        padding: 20,
      }} underlayColor='orange' onPress={() => navigation.navigate('DeckCover', {title})}>
        <Text>{title} ({questions.length} cards)</Text>
      </TouchableHighlight>
    </CenteredContentView>
  )
}
