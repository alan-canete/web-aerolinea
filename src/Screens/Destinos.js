import React from 'react'
import styles from "./Destinos.module.css"
const Destinos = () => {
  return (
    <div name="Destinos" className={styles.destinos}>

      <h1><b>Destinos</b></h1>

      <img className={styles.image} src={require("../Images/image_torres_paine.jpg")} />
      <p>Torres del Paine</p>

      <img className={styles.image} src={require("../Images/image_san_pedro.jpg")} />
      <p>San Pedro de Atacama</p>

    </div>
  )
}

export default Destinos