import React from 'react'
import PropTypes from 'prop-types'
import './Contact.css'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      online: props.online
    }
  }
  
  render () {
    return (
      <div className="Contact">
      <img src={this.props.avatar} className="avatar" alt=""/>
        <div className="status">
          <p className="name">{this.props.name}</p>
          <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
          <p 
            className="status-text" 
            onClick={e => { 
              const isOnline = !this.state.online
              this.setState({online: isOnline})
            }}
          >
            {this.state.online ? 'online' : 'offline'}
          </p>
        </div>
      </div>
    )
  }
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
}

export default Contact
