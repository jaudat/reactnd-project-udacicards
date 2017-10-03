import {AsyncStorage} from 'react-native'
import {APP_STORAGE_KEY} from './constants'

export const submitEntry = {entry, key} =>
  AsyncStorage.mergeItem(
    APP_STORAGE_KEY,
    JSON.stringify({ [key]: entry })
  )

export const removeEntry = key =>
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