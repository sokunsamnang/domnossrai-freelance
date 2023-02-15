import React from 'react'

const AlertInputError = ({ message }) => {
  return (
    <div className="alert-box">
      <p className="alert-message">{message}</p>
    </div>
  )
}

export default AlertInputError