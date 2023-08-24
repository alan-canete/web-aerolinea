import React from 'react'
import styles from "./Contacto.module.css";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Contacto = () => {
  return (
    <div name="Contacto" className={styles.contacto}>
      {/* <h1>Contacto</h1> */}
      <h2><b>Números de contacto</b><br /></h2>
      <p>
        <BsFillTelephoneForwardFill color="#f1f1f1" size={25} />  <a href="tel:996040090">996040090</a><br />
        <BsFillTelephoneForwardFill color="#f1f1f1" size={25} />  <a href="tel:996040090">996040091</a><br />
      </p>
      <hr></hr>
      <h2><b>Correo eléctronico</b><br /></h2>
      <p>
        <HiOutlineMail color="#f1f1f1" size={25} />  <a href="mailto:contacto@aerolinea.cl">contacto@aerolinea.cl</a>
      </p>
    </div>
  )
}

export default Contacto