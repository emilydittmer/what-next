export const ErrorReducers = (state='', action) => {
  switch (action.type) {
    case 'SET_ERROR_MESSAGE':
      return action.error
    default:
      return state;
  }
}