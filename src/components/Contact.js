import React from 'react'
import './Contact.css'

const name ='Marc Kennedy'
const avatar = 'https://randomuser.me/api/portraits/men/17.jpg'
const status = 'online'

function Contact() {
  return (
    <div className="Contact">
    <img src={avatar} className="avatar"/>
      <div className="status">
        <p className="name">{name}</p>
        <div className="status-online"></div>
        <p className="status-text">{status}</p>
      </div>
    </div>
  )
}

export default Contact
