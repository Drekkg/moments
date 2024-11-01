import React from 'react'
import noReply from '../assets/no-results.png'
import '../styles/NoResults.module.css'
import Asset from './Asset';
const NotFound = () => {
  return (
    <div className="Margin">
        < Asset src={noReply} message={"Sorry, The Page You are Looking for is Gone"}/>
    </div>
  )
}

export default NotFound