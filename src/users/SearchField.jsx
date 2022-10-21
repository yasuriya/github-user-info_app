import React from 'react'
import { connect } from 'react-redux'
import * as usersActions from './users.actions'

class SearchField extends React.Component {
  state = {
    userData: '',
  }

  onChange = (e) => {
    this.setState({
      userData: e.target.value,
    })
  }

  handleUserSearch = () => {
    this.props.fetchUserData(this.state.userData)
  }

  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          className="name-form__input"
          onChange={this.onChange}
          value={this.state.userData}
        />
        <button className="name-form__btn btn" onClick={this.handleUserSearch}>
          Show
        </button>
      </div>
    )
  }
}

const mapDispatch = {
  fetchUserData: usersActions.fetchUserData,
}

export default connect(null, mapDispatch)(SearchField)
