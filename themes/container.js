import styled from 'styled-components/native'
import {View} from 'react-native'

export const FullWidthView = styled.View`
  flex: 1;
`

export const CenteredContentView = FullWidthView.extend`
  background: #ffffff;
  align-items: center;
  justify-content: center;
`
