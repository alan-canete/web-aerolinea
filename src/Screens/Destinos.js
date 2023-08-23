import React from 'react'
import styles from "./Destinos.module.css"
const Destinos = () => {
  return (
    <div name="Destinos" className={styles.destinos}>
      <p>Torres del Paine</p>
      <img className={styles.image} src={require("../Images/image_torres_paine.jpg")} />
      <p>San Pedro de Atacama</p>
      <img className={styles.image} src={require("../Images/image_san_pedro.jpg")} />
    </div>
  )
}

export default Destinos