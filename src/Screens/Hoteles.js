import React from 'react';
import styles from "./Hoteles.module.css";

const Hoteles = () => {
  return (
    <div name="Hoteles" className={styles.hoteles}>
      <h1><b>Hoteles asociados</b></h1>
      <img className={styles.image} src={require("../Images/hotel_01.jpg")} />
      <p>Palladium Hotel Don Carlos, Santa Eulalia del Río.</p>

      <img className={styles.image} src={require("../Images/hotel_02.jpg")} />
      <p>Casa Chichipicas, Valle de Bravo.</p>

      <img className={styles.image} src={require("../Images/hotel_03.jpg")} />
      <p>Tulemar Bungalows & Villas.</p>

    </div>
  )
}

export default Hoteles