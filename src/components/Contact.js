import React from 'react'
import PropTypes from 'prop-types'
import './Contact.css'

function Contact(props) {
  return (
    <div className="Contact">
    <img src={props.avatar} className="avatar" alt=""/>
      <div className="status">
        <p className="name">{props.name}</p>
        <div className={props.online === true ? 'status-online' : 'status-offline'}></div>
        <p className="status-text">{props.online === true ? 'online' : 'offline'}</p>
      </div>
    </div>
  )
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
}

export default Contact
