import React from 'react'
import '../assets/Card.css'

const Card = (props) => {
  return (
      <div className="card shadow-cardShadow " style={{ 'background': props.color }}>
        <h2 className="card__title text-2xl  hover:text-gray-300">{props.content}</h2>
        <h1 className="card__apply font-semibold italic">
          Check Out
        </h1>
      </div>
    )
}

export default Card;