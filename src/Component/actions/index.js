import { ADD_REMINDER, CLEAR_REMINDERS, REMOVE_REMINDER } from '../types/index'
export const AddFunction = (text, date) => {
  const action = {
    type: ADD_REMINDER,
    text,
    date,
  }
  console.log('action file ', action)
  return action
}

export const RemoveFunction = (id) => {
  const action = {
    type: REMOVE_REMINDER,
    id,
  }
  return action
}
export const ClearFunction = () => {
  const action = {
    type: CLEAR_REMINDERS,
  }
  return action
}
