import { fetchData } from '../gateway'

export const SHOW_SPINNER = 'SHOW_SPINNER'
export const USERDATA_RECEIVED = 'USERDATA_RECEIVED'

export const showSpinner = () => ({ type: SHOW_SPINNER })
export const userDataReceived = (userData) => {
  return {
    type: USERDATA_RECEIVED,
    payload: {
      userData,
    },
  }
}

export const fetchUserData = (userName) => {
  return function (dispatch) {
    dispatch(showSpinner())
    fetchData(userName).then((userData) => dispatch(userDataReceived(userData)))
  }
}
