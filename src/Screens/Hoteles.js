import React from 'react';
import styles from "./Hoteles.module.css";

const Hoteles = () => {
  return (
    <div name="Hoteles" className={styles.hoteles}>
      <p>Hoteles asociados</p>
      <img className={styles.image} src={require("../Images/hotel_01.jpg")} />
      <img className={styles.image} src={require("../Images/hotel_02.jpg")} />
      <img className={styles.image} src={require("../Images/hotel_03.jpg")} />
    </div>
  )
}

export default Hoteles