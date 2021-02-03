import { ADD_REMINDER, CLEAR_REMINDERS, REMOVE_REMINDER } from '../types/index'
import { bake_cookie, read_cookie } from 'sfcookies'
const Reminder = (state = [], action) => {
  state = read_cookie('reminders')
  let reminders = null
  if (action.type === ADD_REMINDER) {
    reminders = [
      ...state,
      { text: action.text, date: action.date, id: Math.random() },
    ]
    bake_cookie('reminders', reminders)
    console.log('Reducer file', reminders)
    return reminders
  } else if (action.type === REMOVE_REMINDER) {
    reminders = state.filter((reminder) => reminder.id !== action.id)
    bake_cookie('reminders', reminders)

    return reminders
  } else if (action.type === CLEAR_REMINDERS) {
    bake_cookie('reminders', reminders)
    reminders = []
    return reminders
  } else {
    return state
  }
}

export default Reminder
