import React from 'react'
import styles from "./Contacto.module.css";

const Contacto = () => {
  return (
    <div name="Contacto" className={styles.contacto}>
      <h1>Contacto</h1>
      <h2><b>Números de contacto</b><br /></h2>
      <p><b>Telefono 1: </b> <a href="tel:996040090">996040090</a><br />
        <b>Telefono 2: </b><a href="tel:996040091">996040091</a></p>
      <hr></hr>
      <h2><b>Correo eléctronico</b><br /></h2>
      <p><b>Email:  </b>  <a href="mailto:contacto@aerolinea.cl">contacto@aerolinea.cl</a></p>
    </div>
  )
}

export default Contacto