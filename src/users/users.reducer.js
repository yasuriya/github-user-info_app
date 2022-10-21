import { SHOW_SPINNER, USERDATA_RECEIVED } from './users.actions'

const initialState = {
  isFetching: false,
  userData: null,
}

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      }
    case USERDATA_RECEIVED:
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false,
      }

    default:
      return state
  }
}

export default usersReducer
