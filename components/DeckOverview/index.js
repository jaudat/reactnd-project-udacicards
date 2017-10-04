import React from 'react'
import {Text, View} from 'react-native'

import {CenteredContentView} from '../../themes/container'

export const DeckOverview = ({title, questions}) =>
  <CenteredContentView>
    <Text>{title}</Text>
  </CenteredContentView>
