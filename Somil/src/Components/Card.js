import React from 'react'
import styles from '../styles/card.module.css'

const Card = (props) => {
  return (
    <div className={`${styles.card}`}>
        <p className={`${styles.title}`}>{props.title}</p>
        <p className={`${styles.subtitle}`}>{props.subtitle}</p>
    </div>
  )
}

export default Card