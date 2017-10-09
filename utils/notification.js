import React from 'react'
import {AsyncStorage} from 'react-native'
import {Notifications, Permissions} from 'expo'

import {APP_NOTIFICATION_KEY} from './constants'

export function clearLocalNotification() {
  return AsyncStorage.removeItem(APP_NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification {
  return {
    title: 'Do a quiz',
    body: "Don't forget to do a quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: 'false',
      vibrate: 'true'
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(APP_NOTIFICATION_KEY)
    .then(JSON.parse)
    .then( data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then( ({status}) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tommorow = new Date()
              tommorow.setDate(tommorow.getDate() + 1)
              tommorow.setHours(20)
              tommorow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tommorow,
                  repeat: 'day'
                }
              )

              AsyncStorage.setItem(APP_NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}