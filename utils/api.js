import {AsyncStorage} from 'react-native'
import {APP_STORAGE_KEY} from './constants'

export const setDecks = (dictionary) => {
  AsyncStorage.setItem(APP_STORAGE_KEY, dictionary)
}

export const getDeck = key =>
  AsyncStorage.getItem(APP_STORAGE_KEY).then(
    results => JSON.parse(results)[key]
  )

export const listDecks = () =>
  AsyncStorage.getItem(APP_STORAGE_KEY).then(
    results => JSON.parse(results)
  )

export const submitDeck = ({entry, key}) =>
  AsyncStorage.mergeItem(
    APP_STORAGE_KEY,
    JSON.stringify({ [key]: entry })
  )

export const removeDeck = key =>
  AsyncStorage.getItem(APP_STORAGE_KEY).then(
    results => {
      let data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(
        APP_STORAGE_KEY,
        JSON.stringify(data)
      )
    }
  )