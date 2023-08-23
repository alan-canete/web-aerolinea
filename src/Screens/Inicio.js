import React from 'react'
import styles from "./Inicio.module.css";

const Inicio = () => {
  return (
    <div name="Inicio" className={styles.inicio}>
      <div className={styles.titleContainer}>
        <p>
          Bienvenidos a tu<br />
          <b>Aerolínea</b>
        </p>
        <p>
          Los mejores destinos<br />
          <b>a tu alcance</b>
        </p>
      </div>
    </div>
  )
}

export default Inicio