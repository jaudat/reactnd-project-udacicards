import React from 'react';
import { Text } from 'react-native';

import {CenteredContentView} from '../../themes/container'

export default function DeckList({navigation}) {
  return (
    <CenteredContentView>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
    </CenteredContentView>
  );
}
